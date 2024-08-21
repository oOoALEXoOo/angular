import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppModule } from './app.module';
import { NgSwitchCase } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AppModule, NgSwitchCase],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Hello, Angular';
  // number = 42;
  // array = [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ];
  // obj = { a: 1, b: { c: 2 } };
  // logo = 'https://cdn.iconscout.com/icon/free/png-256/free-react-1-282599.png?f=webp&w=256';
  // inputValue = '';
  // inputValue = 'Initial';
  // toggle: any = false;

  // array = [1, 1, 2, 3, 5, 8, 13];
  // posts = [
  //   {
  //     title: 'Post 1', author: 'Alex', comments: [
  //       { name: 'Max', text: 'lorem 1' },
  //       { name: 'Max', text: 'lorem 2' },
  //       { name: 'Max', text: 'lorem 3' },
  //     ]
  //   },
  //   {
  //     title: 'Post 2', author: 'Oliver', comments: [
  //       { name: 'Lex', text: 'lorem 1' },
  //       { name: 'Lex', text: 'lorem 2' },
  //       { name: 'Lex', text: 'lorem 3' },
  //     ]
  //   }
  // ];

  now: Date = new Date();

  // constructor() {
  //   setTimeout(() => {
  //     console.log('Timeout is over');
  //     this.logo = 'https://cdn.iconscout.com/icon/free/png-256/free-angular-3628622-3029847.png?f=webp&w=256';
  //   }, 3000)
  // }

  // onInput(event: any) {
  //   this.inputValue = event.target.value;
  // }
  //
  // onClick() {
  //   console.log('Click!')
  // }
  //
  // onBlur(value: string) {
  //   this.inputValue = value;
  // }
}
