import { NgModule } from '@angular/core';
import { CommonModule, JsonPipe, NgForOf, NgIf } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserFormComponent } from './user-form/user-form.component';
import { SwitchComponent } from './switch/switch.component';

@NgModule({
  declarations: [
    UserFormComponent,
    SwitchComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgIf,
    JsonPipe,
    NgForOf
  ],
  exports: [
    NgIf,
    JsonPipe,
    NgForOf,
    ReactiveFormsModule,
    UserFormComponent,
    SwitchComponent,
    FormsModule
  ]
})
export class AppModule { }
