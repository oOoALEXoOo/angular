import { Injectable } from '@angular/core';
import { Post } from '../interfaces/post.interface';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  posts: Post[] = [
    { title: 'Post 1', text: 'Sample text for post 1', id: 1 },
    { title: 'Post 2', text: 'Sample text for post 2', id: 2 },
    { title: 'Post 3', text: 'Sample text for post 3', id: 3 },
    { title: 'Post 4', text: 'Sample text for post 4', id: 4 },
    { title: 'Post 5', text: 'Sample text for post 5', id: 5 },
    { title: 'Post 6', text: 'Sample text for post 6', id: 6 },
    { title: 'Post 7', text: 'Sample text for post 7', id: 7 },
    { title: 'Post 8', text: 'Sample text for post 8', id: 8 },
    { title: 'Post 9', text: 'Sample text for post 9', id: 9 },
    { title: 'Post 10', text: 'Sample text for post 10', id: 10 },
    { title: 'Post 11', text: 'Sample text for post 11', id: 11 },
    { title: 'Post 12', text: 'Sample text for post 12', id: 12 }
  ];

  getById(id: number): Post {
    return (this.posts.find((p) => p.id === id) as Post);
  }
}
