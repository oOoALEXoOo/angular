import { NgModule } from '@angular/core';
import { CommonModule, DatePipe, NgClass, NgForOf, NgIf, NgStyle, NgSwitch, NgSwitchDefault, UpperCasePipe } from '@angular/common';

import { PostComponent } from './post/post.component';
import { Post2Component } from './post2/post2.component';
import { Post3Component } from './post3/post3.component';
import { Post4Component } from './post4/post4.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    PostComponent,
    Post2Component,
    Post3Component,
    Post4Component,
  ],
  exports: [
    PostComponent,
    Post2Component,
    Post3Component,
    Post4Component,
    FormsModule,
    NgStyle,
    NgClass,
    NgIf,
    NgSwitch,
    NgSwitchDefault,
    NgForOf,
    DatePipe,
    UpperCasePipe
  ],
  imports: [
    CommonModule
  ]
})
export class AppModule { }
