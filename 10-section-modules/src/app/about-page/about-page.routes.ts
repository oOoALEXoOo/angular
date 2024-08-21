import { Routes } from '@angular/router';
import { AboutPageComponent } from './about-page.component';
import { AboutExtraPageComponent } from './about-extra-page/about-extra-page.component';

export const routes: Routes = [
  {
    path: '',
    component: AboutPageComponent,
    children: [
      { path: 'extra', component: AboutExtraPageComponent }
    ]
  }
];
