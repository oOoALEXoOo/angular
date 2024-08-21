import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AboutExtraComponent } from './about-extra/about-extra.component';
import { HomeComponent } from './home/home.component';
import { PostComponent } from './post/post.component';
import { PostsComponent } from './posts/posts.component';
import { AppRoutingModule } from './app-routing.module';
import { Page404Component } from './page-404/page-404.component';

@NgModule({
  declarations: [
    AboutComponent,
    AboutExtraComponent,
    HomeComponent,
    PostComponent,
    PostsComponent,
    Page404Component
  ],
  imports: [
    CommonModule,
    RouterOutlet,
    AppRoutingModule,
    RouterLink,
    RouterLinkActive
  ],
  exports: [
    AboutComponent,
    AboutExtraComponent,
    HomeComponent,
    PostComponent,
    PostsComponent,
    RouterOutlet,
    RouterLink,
    RouterLinkActive
  ]
})
export class AppModule { }
