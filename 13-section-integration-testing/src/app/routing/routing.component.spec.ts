import { ComponentFixture, TestBed } from '@angular/core/testing';
import {
  ActivatedRoute, Router, RouterModule, RouterOutlet
} from '@angular/router';
import { By } from '@angular/platform-browser';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { RoutingComponent } from './routing.component';
import { RouterStub } from '../stubs/router.stub';
import { ActivatedRouterStub } from '../stubs/activated-router.stub';

describe('RoutingComponent', () => {
  let component: RoutingComponent;
  let fixture: ComponentFixture<RoutingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RoutingComponent],
      imports: [RouterModule],
      providers: [
        { provide: Router, useClass: RouterStub },
        { provide: ActivatedRoute, useClass: ActivatedRouterStub }
      ],
      schemas: [NO_ERRORS_SCHEMA]
    });

    fixture = TestBed.createComponent(RoutingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be defined', () => {
    expect(component).toBeDefined();
  });

  it('should navigate to /posts if went back', () => {
    const router = TestBed.inject(Router);
    const spyOnNavigate = spyOn(router, 'navigate');

    component.goBack();

    expect(spyOnNavigate).toHaveBeenCalledWith(['/posts']);
  });

  it('should navigate to /404 if param id equals 0', () => {
    const router = TestBed.inject(Router);
    const route: ActivatedRouterStub = TestBed.inject(ActivatedRoute);
    const spyOnNavigate = spyOn(router, 'navigate');

    route.push?.({ id: '0' });

    expect(spyOnNavigate).toHaveBeenCalledWith(['/404']);
  });

  it('should have router-outlet directive in the template', () => {
    const debugElement = fixture.debugElement.query(By.directive(RouterOutlet));

    expect(debugElement).not.toBeNull();
  });
});
