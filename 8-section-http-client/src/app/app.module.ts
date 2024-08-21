import { NgModule } from '@angular/core';
import {
  CommonModule, NgForOf, NgIf, TitleCasePipe
} from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterOutlet,
    FormsModule,
    NgForOf,
    TitleCasePipe,
    NgIf
  ],
  exports: [
    RouterOutlet,
    NgForOf,
    TitleCasePipe,
    FormsModule,
    NgIf
  ]
})
export class AppModule { }
