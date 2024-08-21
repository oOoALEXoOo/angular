import { Injectable } from '@angular/core';
import { LogService } from './log.service';

@Injectable({
  providedIn: 'root'
})
export class AppCounterService {
  counter: number = 0;

  constructor(private logService: LogService) {}

  increase() {
    this.logService.log('increase counter...');
    this.counter += 1;
  }

  decrease() {
    this.logService.log('decrease counter...');
    this.counter -= 1;
  }
}
