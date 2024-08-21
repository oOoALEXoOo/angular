import { Component, OnInit } from '@angular/core';
import { Observable, switchMap } from 'rxjs';
import { ActivatedRoute, Params } from '@angular/router';
import { IPost } from '../shared/interfaces/post.interface';
import { PostsService } from '../shared/services/posts.service';

@Component({
  selector: 'app-post-page',
  templateUrl: './post-page.component.html',
  styleUrl: './post-page.component.scss'
})
export class PostPageComponent implements OnInit {
  post$: Observable<IPost>;

  constructor(
    private route: ActivatedRoute,
    private postsService: PostsService
  ) {}

  ngOnInit() {
    this.post$ = this.route.params.pipe(
      switchMap((params: Params) => this.postsService.getById(params['id']))
    );
  }
}
