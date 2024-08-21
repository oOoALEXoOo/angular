import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Observable } from 'rxjs';
import { AppModule } from './app.module';
import { Post } from './interfaces/post.interface';
import { SearchField } from './enums/search-field.enum';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AppModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  promise: Promise<string> = new Promise((resolve) => {
    setTimeout(() => {
      resolve('Promise Resolved');
    }, 1000);
  });

  date$: Observable<Date> = new Observable<Date>((observer) => {
    setInterval(() => {
      observer.next(new Date());
    }, 1000);
  });

  // date: Date;

  // ngOnInit(): void {
  //   this.date$.subscribe((date: Date) => {
  //     this.date = date;
  //   });
  // }

  // e: number = Math.E;
  // str = 'hello world';
  // date: Date = new Date();
  // float: number = 0.42;
  // obj = {
  //   a: 1,
  //   b: {
  //     c: 2,
  //     d: {
  //       e: 3,
  //       f: 4,
  //     }
  //   }
  // };

  // search = '';
  // protected readonly SearchField = SearchField;
  // searchField: SearchField = SearchField.Title;
  //
  // posts: Post[] = [
  //   { title: 'Beer', text: 'The best beer in the whole world!' },
  //   { title: 'Bread', text: 'The best bread in the whole world!' },
  //   { title: 'JavaScript', text: 'The best language in the whole world!' }
  // ];
  //
  // addPost() {
  //   this.posts.unshift({
  //     title: 'Angular 18',
  //     text: 'Angular 18 Pipes Section',
  //   });
  // }
}
