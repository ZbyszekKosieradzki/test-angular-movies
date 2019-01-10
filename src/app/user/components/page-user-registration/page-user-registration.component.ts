import { Component, OnInit } from '@angular/core';
import { UserModel } from 'src/app/models/user-model';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-page-user-registration',
  templateUrl: './page-user-registration.component.html',
  styleUrls: ['./page-user-registration.component.css']
})
export class PageUserRegistrationComponent implements OnInit {

  userModel = new UserModel(
    'Zby',
    'password',
    '123456',
    'm'
  );

  url = 'http://localhost:3000';
  constructor(
    private http: HttpClient

  ) { }

  ngOnInit() {
  }

  validateEmail(email: string): boolean {
    return (/@/).test(email);
  }
  submit(data) {
    console.log({ data });
    this.http.post(this.url, data)
      .subscribe((response) => {
        console.log(response);
      }, (error) => {
        console.log(error);
      });
  }
}
