import { Provider } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from '../interceptors/auth.interceptor';

export const INTERCEPTOR_PROVIDER: Provider = Object.freeze({
  provide: HTTP_INTERCEPTORS,
  useClass: AuthInterceptor,
  multi: true
});
