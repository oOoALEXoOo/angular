import { Injectable } from '@angular/core';

@Injectable()
export class LocalCounterService {
  counter: number = 0;

  increase() {
    this.counter += 1;
  }

  decrease() {
    this.counter -= 1;
  }
}
