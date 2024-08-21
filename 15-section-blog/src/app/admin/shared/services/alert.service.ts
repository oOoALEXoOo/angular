import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { IAlert } from '../../../shared/interfaces/alert.interface';
import { AlertType } from '../enums/alert-type';

@Injectable()
export class AlertService {
  alert$: Subject<IAlert> = new Subject<IAlert>();

  success(text: string): void {
    this.alert$.next({ type: AlertType.Success, text });
  }

  warning(text: string): void {
    this.alert$.next({ type: AlertType.Warning, text });
  }

  danger(text: string): void {
    this.alert$.next({ type: AlertType.Danger, text });
  }
}
