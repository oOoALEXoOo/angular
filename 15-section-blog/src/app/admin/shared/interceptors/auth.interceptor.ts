import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let clonedReq: HttpRequest<any> = req.clone();

    if (this.authService.isAuthenticated()) {
      clonedReq = req.clone({
        setParams: { auth: this.authService.token as string }
      });
    }

    return next.handle(clonedReq)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          if (error.status === 401) {
            this.authService.logout();
            this.router.navigate(['/admin', 'login'], {
              queryParams: { authFailed: true }
            });
          }

          return throwError(() => error);
        })
      );
  }
}
