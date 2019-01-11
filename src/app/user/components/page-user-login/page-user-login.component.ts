import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

import { forbiddenEmail } from '../../../validators/forbiddenEmail.validator';
import { AuthService } from '../../services/auth.service';
import { UserCredentials } from '../../interfaces/user-credentials.interface';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-page-user-login',
  templateUrl: './page-user-login.component.html',
  styleUrls: ['./page-user-login.component.css']
})
export class PageUserLoginComponent implements OnInit {
  router: any;

  //loginFormSubmited = false;

  get email() {
    return this.loginFormGroup.get('email');

  }
  get password() {
    return this.loginFormGroup.get('password');
  }


  /*
    loginFormGroup = new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        forbiddenEmail
      ]),
      password: new FormControl('', [Validators.required, Validators.minLength(3)])
    },
      { updateOn: 'change' } //wylaczyc touche
    );
  */

  loginFormGroup = this.fb.group({
    email: ['', [
      Validators.required,
      Validators.minLength(3),
      forbiddenEmail
    ]],
    password: ['', [
      Validators.required,
      Validators.minLength(3)
    ]]
  }
  );

  authError = null;

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private route: Router,
  ) { }

  ngOnInit() {
    setTimeout(() => {
      // this.email.setValue('dd@ddd.pl');
      /*
            this.loginFormGroup.pathValue({
              email:'sdf@asd.pl',
            });

        */
      this.loginFormGroup.setValue({
        email: 'aaa@aaa.pl',
        password: '12345678'
      });
    }, 1000);
  }

  validateFiled(fieldName: string) {

    const field = this.loginFormGroup.get(fieldName);

    //return field.errors && field.touched;

    return field.errors && field.value !== '';
  }

  onSubmit() {
    //this.loginFormSubmited = true;

    const data: UserCredentials = this.loginFormGroup.getRawValue();

    //
    console.log(data);

    const status = this.auth.authenticate(data);
    console.log(status);

    if (status) {
      this.route.navigate(['/movies/']);
    } else {
      this.authError = 'login fail. unauthorized';
    }
  }
}
