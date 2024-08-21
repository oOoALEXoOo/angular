import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, EventType, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  isShownExtra = true;
  baseUrl: string = this.router.url;

  constructor(private router: Router, private activatedRoute: ActivatedRoute,) {}

  ngOnInit() {
    this.subscription = this.router.events.subscribe((event) => {
      if (event.type === EventType.ChildActivationEnd) {
        this.isShownExtra = this.baseUrl === this.router.url;
      }
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
