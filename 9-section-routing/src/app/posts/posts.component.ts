import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { PostsService } from '../services/posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.scss'
})
export class PostsComponent implements OnInit {
  showIds = false;

  constructor(
    private router: Router,
    protected postsService: PostsService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe((params: Params) => {
      this.showIds = params['showIds'] === 'true';
    });

    this.activatedRoute.fragment.subscribe((fragment: string | null) => {
      console.log('Fragment', fragment);
    });
  }

  showIdsProgram() {
    this.router.navigate(['/posts'], {
      queryParams: { showIds: true },
      fragment: 'program-fragment-id'
    });
  }
}
