import { Component, OnInit } from '@angular/core';
import {
  FormBuilder, FormControl, FormGroup, Validators
} from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { MyValidators } from '../shared/validators/my.validators';
import { IUser } from '../../shared/interfaces/user.interface';
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss'
})
export class LoginPageComponent implements OnInit {
  form: FormGroup;
  message: string;
  submitted = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    public authService: AuthService
  ) { }

  ngOnInit() {
    this.route.queryParams.subscribe((params: Params) => {
      if (params['loginRequired']) {
        this.message = 'Please, login first.';
      } else if (params['authFailed']) {
        this.message = 'Authentication failed. Session is expired or email/password is incorrect.';
      }
    });

    this.form = this.fb.group({
      email: ['', [Validators.required, MyValidators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  getControl(name: string): FormControl {
    return this.form.get(name) as FormControl;
  }

  submit() {
    if (this.form.invalid) {
      return;
    }
    this.submitted = true;

    const user: IUser = this.form.value;

    this.authService.login(user).subscribe({
      next: () => {
        this.form.reset();
        this.router.navigate(['/admin', 'dashboard']);
        this.submitted = false;
      },
      error: () => {
        this.submitted = false;
      }
    });
  }
}
