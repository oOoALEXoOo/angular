import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data, Router } from '@angular/router';
import { Post } from '../interfaces/post.interface';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss'
})
export class PostComponent implements OnInit {
  post: Post;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    // this.post = this.activatedRoute.snapshot.data['post'];

    this.activatedRoute.data.subscribe((data: Data) => {
      this.post = data['post'];
    });

    // this.activatedRoute.params.subscribe((params: Params) => {
    //   this.post = this.postsService.getById(+params['id']);
    // });
  }

  loadPost() {
    this.router.navigate(['/posts', 4]);
  }
}
