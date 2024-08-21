import { Component } from '@angular/core';

@Component({
  selector: 'app-post4',
  template: `
    <div class="post-4">
      <h2>Post-4 Title</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, odio.</p>
    </div>
  `,
  styles: [`
    .post-4 {
      padding: .5rem;
      border: 2px solid black;
      margin-bottom: 1rem;
    }

    h2 {
      font-size: 1rem;
    }
  `]
})
export class Post4Component {}
