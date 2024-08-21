import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { Post } from '../app.component';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrl: './post-form.component.scss'
})
export class PostFormComponent {
  @Output() onAddPost: EventEmitter<Post> = new EventEmitter<Post>();
  @ViewChild('titleInput') inputRef: ElementRef;

  title = '';
  text = '';

  addPost() {
    if (this.title.trim() && this.text.trim()) {
      const post: Post = {
        title: this.title,
        text: this.text
      }
      this.onAddPost.emit(post);

      this.title = this.text = '';
    }
  }

  focusTitle() {
    console.log(this.inputRef);
  }
}
