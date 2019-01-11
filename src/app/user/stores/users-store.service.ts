import { Injectable } from '@angular/core';
import { UserCredentials } from '../interfaces/user-credentials.interface';

@Injectable({
  providedIn: 'root'
})
export class UsersStoreService {

  users = [
    { email: 'aaa@aaa.pl', password: '12345678' },
    { email: 'bbb@bbb.pl', password: '12345678' }
  ];

  check(usersCredentials: UserCredentials): boolean {
    return this.users.find((user) => {

      return user.email === usersCredentials.email
        && user.password === usersCredentials.password;
    }) !== undefined;
  }
}
