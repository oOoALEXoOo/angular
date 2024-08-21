import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterComponent } from './counter/counter.component';
import { PostsComponent } from './posts/posts.component';

@NgModule({
  declarations: [
    CounterComponent,
    PostsComponent
  ],
  exports: [
    PostsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AppModule { }
