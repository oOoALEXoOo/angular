import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CounterComponent } from './counter/counter.component';
import { PostsComponent } from './posts/posts.component';
import { RoutingComponent } from './routing/routing.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ColorDirective } from './directives/color.directive';

@NgModule({
  declarations: [
    CounterComponent,
    PostsComponent,
    RoutingComponent,
    NavbarComponent,
    ColorDirective
  ],
  exports: [
    CounterComponent
  ],
  imports: [
    FormsModule,
    RouterOutlet,
    RouterLink
  ]
})
export class AppModule {
}
