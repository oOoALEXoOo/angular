import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AlertType } from '../../enums/alert-type';
import { AlertService } from '../../services/alert.service';
import { IAlert } from '../../../../shared/interfaces/alert.interface';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrl: './alert.component.scss'
})
export class AlertComponent implements OnInit, OnDestroy {
  @Input() delay = 5000;
  text: string;
  type: AlertType = AlertType.Success;
  protected readonly AlertType = AlertType;
  alertSubscription: Subscription;

  constructor(private alertService: AlertService) {}

  ngOnInit(): void {
    this.alertSubscription = this.alertService.alert$.subscribe((alert: IAlert) => {
      this.text = alert.text;
      this.type = alert.type;

      const timeout = setTimeout(() => {
        this.text = '';
        clearTimeout(timeout);
      }, this.delay);
    });
  }

  ngOnDestroy() {
    if (this.alertSubscription) {
      this.alertSubscription.unsubscribe();
    }
  }
}
