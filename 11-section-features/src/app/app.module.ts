import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal/modal.component';
import { RefDirective } from './directives/ref.directive';

@NgModule({
  declarations: [
    ModalComponent,
    RefDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ModalComponent,
    CommonModule,
    RefDirective
  ]
})
export class AppModule { }
