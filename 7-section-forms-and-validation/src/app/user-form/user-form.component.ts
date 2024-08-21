import { Component, OnInit } from '@angular/core';
import {
  AbstractControl, FormArray, FormControl, FormGroup, Validators
} from '@angular/forms';
import { MyValidators } from '../validators/my.validators';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.scss'
})
export class UserFormComponent implements OnInit {
  form: FormGroup;
  skills: Array<AbstractControl<string>>;

  ngOnInit() {
    this.form = new FormGroup({
      email: new FormControl('', [
        Validators.required,
        MyValidators.email,
        MyValidators.restrictedEmails
      ], [
        MyValidators.uniqEmail
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8)
      ]),
      address: new FormGroup({
        country: new FormControl('ua'),
        city: new FormControl('', [Validators.required]),
      }),
      skills: new FormArray([])
    });

    this.skills = (this.form.get('skills') as FormArray).controls;
  }

  submit() {
    if (this.form.valid) {
      console.log('Form : ', this.form);
      console.log('Form Value : ', this.form.value);
    }

    this.form.reset();
  }

  setCapital() {
    const capitalMap: { [key: string]: string } = {
      ua: 'Kiev',
      fr: 'Paris',
      uk: 'London'
    };

    const capitalKey: string = this.form.get('address')?.get('country')?.value;
    const capital: string = capitalMap[capitalKey];

    this.form.patchValue({ address: { city: capital } });
  }

  addSkill() {
    const skill = new FormControl('', Validators.required);
    (this.form.get('skills') as FormArray)?.push(skill);
  }
}
