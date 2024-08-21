import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppModule } from './app.module';

export interface Post {
  title: string;
  text: string;
  id?: number
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AppModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  posts: Post[] = [
    { title: 'Angular Components in details', text: 'I am thrilled to learn Angular Components', id: 1 },
    { title: 'Angular Directives and pipes', text: 'I am looking forward to learn next chapter of Angular', id: 2 }
  ];

  updatePosts(post: Post) {
    this.posts.unshift(post);
  }

  removePost(id: number) {
    if (id) {
      this.posts = this.posts.filter((post) => post.id !== id);
    }
  }
}
