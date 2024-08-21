import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PostsComponent } from './posts/posts.component';
import { PostComponent } from './post/post.component';
import { AboutExtraComponent } from './about-extra/about-extra.component';
import { Page404Component } from './page-404/page-404.component';
import { AuthGuard } from './guards/auth.guard';
import { PostResolver } from './resolvers/post.resolver';

// http://localhost:4200/ -> HomeComponent
// http://localhost:4200/about -> AboutComponent
// http://localhost:4200/posts -> PostsComponent
// http://localhost:4200/about/extra -> AboutExtraComponent
// http://localhost:4200/404 -> Page404Component

export const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'about',
    component: AboutComponent,
    canActivateChild: [AuthGuard],
    children: [
      { path: 'extra', component: AboutExtraComponent },
    ]
  },
  { path: 'posts', component: PostsComponent, canActivate: [AuthGuard] },
  {
    path: 'posts/:id',
    component: PostComponent,
    resolve: {
      post: PostResolver
    }
  },
  { path: '404', component: Page404Component },
  { path: '**', redirectTo: '/404' }
];
