import { Observable, Subject } from 'rxjs';
import { Params } from '@angular/router';

export class ActivatedRouterStub {
  private subject?: Subject<Params> = new Subject<Params>();

  push?(params: Params): void {
    this.subject?.next(params);
  }

  get params(): Observable<Params> | undefined {
    return this.subject?.asObservable();
  }
}
