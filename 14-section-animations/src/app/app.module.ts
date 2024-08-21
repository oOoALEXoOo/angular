import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimateComponent } from './animate/animate.component';

@NgModule({
  declarations: [
    AnimateComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CommonModule,
    AnimateComponent
  ]
})
export class AppModule { }
