import { Component, OnInit } from '@angular/core';
import { PostsService } from '../services/posts.service';

@Component({
  template: 'Posts component',
  selector: 'app-posts'
})
export class PostsComponent implements OnInit {
  posts: any[] = [];
  message: string;

  constructor(private service: PostsService) {
  }

  ngOnInit(): void {
    this.service.fetchPromise().then((p) => {
      console.log('fetchPromise CALLED');
      this.posts = p;
    });
  }

  add(title: string) {
    const post = { title };

    this.service.create(post).subscribe({
      next: (p) => {
        this.posts.push(p);
      },
      error: (err) => {
        this.message = err;
      }
    });
  }

  delete(id: number) {
    if (window.confirm('Are you sure?')) {
      this.service.remove(id).subscribe();
    }
  }
}
