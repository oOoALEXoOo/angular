import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss'
})
export class CounterComponent {
  form: FormGroup;
  counter = 0;
  @Output() counterChange: EventEmitter<number> = new EventEmitter<number>();

  constructor(private formBuilder: FormBuilder) {
    this.form = formBuilder.group({
      login: ['', Validators.required],
      email: ['', Validators.required]
    });
  }

  increment(): void {
    this.counter += 1;
    this.counterChange.emit(this.counter);
  }

  decrement(): void {
    this.counter -= 1;
    this.counterChange.emit(this.counter);
  }
}
