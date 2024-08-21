import { Observable } from 'rxjs';
import { AbstractControl } from '@angular/forms';
import { IValidationError } from '../interfaces/validation-error.interface';

export class MyValidators {
  static email(control: AbstractControl): IValidationError | null {
    const validEmailRegex = /[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}/;

    if (!validEmailRegex.test(control.value)) {
      return { email: true };
    }
    return null;
  }

  static restrictedEmails(control: AbstractControl): IValidationError | null {
    const restrictedEmailRegex = /[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.ru/;

    if (restrictedEmailRegex.test(control.value)) {
      return { restrictedEmail: true };
    }
    return null;
  }

  static uniqEmail(control: AbstractControl): Promise<IValidationError | null> | Observable<IValidationError | null> {
    return new Promise((resolve) => {
      setTimeout(() => {
        if (control.value === 'async@gmail.com') {
          resolve({ uniqEmail: true });
        } else {
          resolve(null);
        }
      }, 1000);
    });
  }
}
