import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IPost } from '../../shared/interfaces/post.interface';
import { PostsService } from '../../shared/services/posts.service';
import { AlertService } from '../shared/services/alert.service';
import { alertMessages } from '../shared/constants/alert-messages.constant';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrl: './dashboard-page.component.scss'
})
export class DashboardPageComponent implements OnInit, OnDestroy {
  posts: IPost[] = [];
  searchPostTitle = '';
  postsSubscription: Subscription;
  deleteSubscription: Subscription;

  constructor(
    private postsService: PostsService,
    private alertService: AlertService
  ) {}

  ngOnInit() {
    this.init();
  }

  init() {
    this.postsSubscription = this.postsService.getAll()
      .subscribe((posts: IPost[]) => {
        this.posts = posts;
      });
  }

  remove(id: string | undefined) {
    this.deleteSubscription = this.postsService.remove(id as string)
      .subscribe(() => {
        this.init();

        this.alertService.danger(alertMessages.postRemoveDangerMessage);
      });
  }

  ngOnDestroy(): void {
    if (this.postsSubscription) {
      this.postsSubscription.unsubscribe();
    }

    if (this.deleteSubscription) {
      this.deleteSubscription.unsubscribe();
    }
  }
}
