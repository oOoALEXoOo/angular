import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutPageComponent } from './about-page.component';
import { AboutExtraPageComponent } from './about-extra-page/about-extra-page.component';
import { SharedModule } from '../shared/shared.module';
import { AboutPageRoutingModule } from './about-page-routing.module';

@NgModule({
  declarations: [
    AboutPageComponent,
    AboutExtraPageComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    AboutPageRoutingModule
  ]
})
export class AboutPageModule {
}
