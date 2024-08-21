import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { CounterComponent } from './counter.component';

describe('CounterComponent', () => {
  let component: CounterComponent;
  let fixture: ComponentFixture<CounterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CounterComponent]
    });

    fixture = TestBed.createComponent(CounterComponent);
    component = fixture.componentInstance;
  });

  it('should be created', () => {
    expect(component).toBeDefined();
  });

  it('should render counter property', () => {
    const counter = 42;
    component.counter = counter;

    fixture.detectChanges();

    const debugElement = fixture.debugElement.query(By.css('.counter'));
    const element: HTMLElement = debugElement.nativeElement;

    expect(element.textContent).toContain(counter.toString());
  });

  it('should add class \'green\' if counter is even', () => {
    component.counter = 4;

    fixture.detectChanges();

    const debugElement = fixture.debugElement.query(By.css('.counter'));
    const element: HTMLElement = debugElement.nativeElement;

    expect(element.classList.contains('green')).toBeTruthy();
  });

  it('should increment counter if increment button was clicked', () => {
    const btn = fixture.debugElement.query(By.css('.increment'));

    btn.triggerEventHandler('click');

    expect(component.counter).toBe(1);
  });
});
