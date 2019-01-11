import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-page-user-login',
  templateUrl: './page-user-login.component.html',
  styleUrls: ['./page-user-login.component.css']
})
export class PageUserLoginComponent implements OnInit {

  get email() {
    return this.loginFormGroup.get('email');

  }



  loginFormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.minLength(3)]),
    password: new FormControl('', [Validators.required, Validators.minLength(3)])
  });

  constructor() { }

  ngOnInit() {
  }

  validateFiled(fieldName: string) {

    const field = this.loginFormGroup.get(fieldName);

    return field.errors && field.touched;
  }

  onSubmit(){
    const data = this.loginFormGroup.getRawValue();
    console.log(data);
  }
}
