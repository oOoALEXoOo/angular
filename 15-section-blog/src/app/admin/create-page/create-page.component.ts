import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { IPost } from '../../shared/interfaces/post.interface';
import { PostsService } from '../../shared/services/posts.service';
import { AlertService } from '../shared/services/alert.service';
import { alertMessages } from '../shared/constants/alert-messages.constant';

@Component({
  selector: 'app-create-page',
  templateUrl: './create-page.component.html',
  styleUrl: './create-page.component.scss'
})
export class CreatePageComponent implements OnInit {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private postsService: PostsService,
    private alertService: AlertService
  ) { }

  ngOnInit() {
    this.form = this.fb.group({
      text: ['', [Validators.required]],
      title: ['', [Validators.required]],
      author: ['', [Validators.required]]
    });
  }

  getControl(name: string): FormControl {
    return this.form.get(name) as FormControl;
  }

  submit(): void {
    if (this.form.invalid) {
      return;
    }

    const post: IPost = {
      title: this.form.value.title,
      author: this.form.value.author,
      text: this.form.value.text,
      date: new Date()
    };

    this.postsService.create(post).subscribe(() => {
      this.form.reset();

      this.alertService.success(alertMessages.postCreateSuccessMessage);
    });
  }
}
