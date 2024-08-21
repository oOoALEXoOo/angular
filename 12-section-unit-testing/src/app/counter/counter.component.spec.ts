import { FormBuilder } from '@angular/forms';
import { CounterComponent } from './counter.component';

describe('CounterComponent', () => {
  let component: CounterComponent;

  beforeEach(() => {
    component = new CounterComponent(new FormBuilder());
  });

  it('should increment counter by 1', () => {
    component.increment();
    expect(component.counter).toBe(1);
  });

  it('should decrement counter by 1', () => {
    component.decrement();
    expect(component.counter).toBe(-1);
  });

  it('should increment counter by 1 by event emitter', () => {
    let result = 0;

    component.counterChange.subscribe((counter: number) => {
      result = counter;
    });

    component.increment();

    expect(result).toBe(1);
  });

  it('should create form with 2 controls', () => {
    expect(component.form.contains('login')).toBeTruthy();
    expect(component.form.contains('email')).toBeTruthy();
  });

  it('should mark login as invalid if it has empty value', () => {
    const login = component.form.get('login');

    login?.setValue('');

    expect(login?.valid).toBeFalsy();
  });

  it('should mark email as invalid if it has empty value', () => {
    const email = component.form.get('email');

    email?.setValue('');

    expect(email?.valid).toBeFalsy();
  });
});
