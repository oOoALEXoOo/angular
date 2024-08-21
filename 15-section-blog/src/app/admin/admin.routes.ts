import { Routes } from '@angular/router';

import { AdminLayoutComponent } from './shared/components/admin-layout/admin-layout.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { CreatePageComponent } from './create-page/create-page.component';
import { EditPageComponent } from './edit-page/edit-page.component';
import { AuthGuard } from './shared/guards/auth.guard';

export const routes: Routes = [
  {
    path: '',
    component: AdminLayoutComponent,
    children: [
      { path: '', redirectTo: '/admin/login', pathMatch: 'full' },
      { path: 'login', component: LoginPageComponent },
      { path: 'dashboard', component: DashboardPageComponent, canActivate: [AuthGuard] },
      { path: 'create', component: CreatePageComponent, canActivate: [AuthGuard] },
      { path: 'post/:id/edit', component: EditPageComponent, canActivate: [AuthGuard] }
    ]
  }
];
