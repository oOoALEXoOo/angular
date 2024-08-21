import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PostsService } from '../shared/services/posts.service';
import { IPost } from '../shared/interfaces/post.interface';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent implements OnInit {
  posts$: Observable<IPost[]>;

  constructor(private postsService: PostsService) {}

  ngOnInit() {
    this.posts$ = this.postsService.getAll();
  }
}
