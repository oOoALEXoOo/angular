import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Subject, Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  sub: Subscription;
  counter = 0;
  stream$: Subject<number> = new Subject<number>();

  constructor() {
    this.sub = this.stream$.subscribe((value) => {
      console.log('Subscribe', value);
    });

    // const intervalStream$ = interval(1000);
    //
    // this.sub = intervalStream$
    //   .pipe(
    //     filter((value) => value % 2 === 0),
    //     map((value) => `Mapped value ${value}`)
    //   )
    //   .subscribe((value) => {
    //     console.log(value);
    //   });

    // const stream$ = new Observable((observer: Observer<any>) => {
    //   setTimeout(() => {
    //     observer.next(1);
    //   }, 1500);
    //
    //   setTimeout(() => {
    //     observer.complete();
    //   }, 2200);
    //
    //   setTimeout(() => {
    //     observer.error('Something went wrong!');
    //   }, 2000);
    //
    //   setTimeout(() => {
    //     observer.next(2);
    //   }, 2500);
    // });
    //
    // this.sub = stream$.subscribe(
    //   (value) => console.log('Next: ', value),
    //   (error) => console.log('Error: ', error),
    //   () => console.log('Finished!')
    // );
  }

  stopInterval() {
    this.sub.unsubscribe();
  }

  next() {
    this.stream$.next(this.counter += 1);
  }
}
