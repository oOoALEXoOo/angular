import { NgModule } from '@angular/core';
import { CommonModule, NgForOf, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PostComponent } from './post/post.component';
import { PostFormComponent } from './post-form/post-form.component';

@NgModule({
  declarations: [
    PostComponent,
    PostFormComponent
  ],
  exports: [
    PostFormComponent,
    PostComponent,
    NgForOf,
    NgIf
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class AppModule {
}
