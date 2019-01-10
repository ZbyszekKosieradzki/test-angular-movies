import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { PageUserRegistrationComponent } from './components/page-user-registration/page-user-registration.component';

@NgModule({
  declarations: [PageUserRegistrationComponent],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
