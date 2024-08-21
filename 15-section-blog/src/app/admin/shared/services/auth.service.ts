import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import {
  catchError, Observable, Subject, tap, throwError
} from 'rxjs';
import { IUser } from '../../../shared/interfaces/user.interface';
import { environment } from '../../../../environments/environment.development';
import { IFirebaseAuthResponse } from '../../../shared/interfaces/firebase-auth-response.interface';
import { IFirebaseAuthErrorResponse } from '../../../shared/interfaces/firebase-auth-error-response.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  error$: Subject<string> = new Subject<string>();

  constructor(private http: HttpClient) { }

  get token(): string | null {
    const expirationDate: string | null = localStorage.getItem('firebase_token_expiry');

    if (!expirationDate || new Date() > new Date(expirationDate)) {
      this.logout();
      return null;
    }

    return localStorage.getItem('firebase_token');
  }

  login(user: IUser): Observable<IFirebaseAuthResponse | HttpErrorResponse | null> {
    const { apiKey } = environment;
    const requestedUser: IUser = {
      email: user.email,
      password: user.password,
      returnSecureToken: true
    };

    return this.http.post<IFirebaseAuthResponse>(
      `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${apiKey}`,
      requestedUser
    )
      .pipe(
        tap(this.setToken),
        catchError(this.handleError.bind(this))
      );
  }

  logout() {
    this.setToken(null);
  }

  isAuthenticated(): boolean {
    return !!this.token;
  }

  private setToken(response: IFirebaseAuthResponse | null) {
    if (response) {
      const expirationDate: Date = new Date(Date.now() + +response.expiresIn * 1000);

      localStorage.setItem('firebase_token', response.idToken);
      localStorage.setItem('firebase_token_expiry', expirationDate.toString());
    } else {
      localStorage.clear();
    }
  }

  private handleError(errorResponse: HttpErrorResponse): Observable<HttpErrorResponse> {
    const { message } = (errorResponse.error as IFirebaseAuthErrorResponse).error;

    switch (!!message) {
      case message.includes('EMAIL_NOT_FOUND'):
        this.error$.next('The user has not been found with this email.');
        break;
      case message.includes('INVALID_PASSWORD'):
        this.error$.next('The password is invalid or the user does not have a password.');
        break;
      case message.includes('USER_DISABLED'):
        this.error$.next('The user account has been disabled by an administrator.');
        break;
      case message.includes('TOO_MANY_ATTEMPTS_TRY_LATER'):
        this.error$.next(
          'Access to this account has been temporarily disabled due to many failed login attempts. Try again later.'
        );
        break;
      default:
        this.error$.next('The email and/or password is incorrect.');
    }

    return throwError(() => errorResponse);
  }
}
