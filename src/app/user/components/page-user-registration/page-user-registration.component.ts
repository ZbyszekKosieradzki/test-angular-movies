import { Component, OnInit } from '@angular/core';
import { UserModel } from 'src/app/models/user-model';

@Component({
  selector: 'app-page-user-registration',
  templateUrl: './page-user-registration.component.html',
  styleUrls: ['./page-user-registration.component.css']
})
export class PageUserRegistrationComponent implements OnInit {

  userModel = new UserModel(
    'Zbyszek',

    'password',
    'aaa@aa.pl',
    'm'
    );

  constructor() { }

  ngOnInit() {
  }

}
