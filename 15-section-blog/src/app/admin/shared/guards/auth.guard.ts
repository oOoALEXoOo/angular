import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot, CanActivate, GuardResult, MaybeAsync, Router, RouterStateSnapshot
} from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): MaybeAsync<GuardResult> {
    if (this.authService.isAuthenticated()) {
      return true;
    }

    this.authService.logout();
    this.router.navigate(['/admin', 'login'], {
      queryParams: { loginRequired: true }
    });

    return false;
  }
}
