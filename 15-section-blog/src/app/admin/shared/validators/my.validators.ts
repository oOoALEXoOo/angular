import { AbstractControl } from '@angular/forms';
import { IValidationError } from '../../../shared/interfaces/validation-error.interface';

export class MyValidators {
  static email(control: AbstractControl): IValidationError | null {
    const validEmailRegex = /[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}/;

    if (!validEmailRegex.test(control.value)) {
      return { email: true };
    }
    return null;
  }
}
