import { Injectable } from '@angular/core';
import { UserCredentials } from '../interfaces/user-credentials.interface';
import { UsersStoreService } from '../stores/users-store.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private usersStore: UsersStoreService
  ) { }

  //uwierzytelnienie
  authenticate(userCredentials: UserCredentials) {
    return this.usersStore.check(userCredentials);
  }

  register(userModel: UserModel){

  }
}
