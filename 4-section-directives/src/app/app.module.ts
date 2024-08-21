import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { StyleDirective } from './directives/style.directive';
import { IfNotDirective } from './directives/ifnot.directive';

@NgModule({
  declarations: [
    StyleDirective,
    IfNotDirective
  ],
  exports: [
    StyleDirective,
    IfNotDirective
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class AppModule {
}
