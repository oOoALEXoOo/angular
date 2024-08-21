import { Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';

export const routes: Routes = [
  { path: '', component: HomePageComponent, pathMatch: 'full' },
  { path: 'about', loadChildren: () => import('./about-page/about-page.module').then((m) => m.AboutPageModule) }
];
