import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription, switchMap } from 'rxjs';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { PostsService } from '../../shared/services/posts.service';
import { IPost } from '../../shared/interfaces/post.interface';
import { AlertService } from '../shared/services/alert.service';
import { alertMessages } from '../shared/constants/alert-messages.constant';

@Component({
  selector: 'app-edit-page',
  templateUrl: './edit-page.component.html',
  styleUrl: './edit-page.component.scss'
})
export class EditPageComponent implements OnInit, OnDestroy {
  post: IPost;
  form: FormGroup;
  submitted = false;
  updateSubscription: Subscription;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private postsService: PostsService,
    private alertService: AlertService
  ) {}

  ngOnInit() {
    this.route.params.pipe(
      switchMap((params: Params) => this.postsService.getById(params['id']))
    ).subscribe((post: IPost) => {
      this.post = post;

      this.form = this.fb.group({
        title: [post.title, [Validators.required]],
        text: [post.text, [Validators.required]],
      });
    });
  }

  getControl(name: string): FormControl {
    return this.form.get(name) as FormControl;
  }

  submit() {
    if (this.form.invalid) {
      return;
    }

    this.submitted = true;

    this.updateSubscription = this.postsService.update({
      ...this.post,
      text: this.form.value.text,
      title: this.form.value.title
    }).subscribe(() => {
      this.submitted = false;

      this.alertService.success(alertMessages.postUpdateSuccessMessage);
    });
  }

  ngOnDestroy() {
    if (this.updateSubscription) {
      this.updateSubscription.unsubscribe();
    }
  }
}
