import {
  HttpEvent, HttpEventType, HttpHandler, HttpInterceptor, HttpRequest
} from '@angular/common/http';
import { Observable, tap } from 'rxjs';

export class AuthInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('Intercept Request: ', req);

    const clonedReq = req.clone({
      headers: req.headers.append('Auth', 'SOME RANDOM TOKEN')
    });

    return next.handle(clonedReq)
      .pipe(
        tap((event: HttpEvent<any>) => {
          if (event.type === HttpEventType.Response) {
            console.log('Intercept Response: ', event);
          }
        })
      );
  }
}
