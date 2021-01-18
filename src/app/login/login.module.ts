import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { UserAuthenticationComponent } from './user-authentication/user-authentication.component';


@NgModule({
  declarations: [LoginComponent, UserAuthenticationComponent],
  imports: [
    CommonModule,
    LoginRoutingModule
  ]
})
export class LoginModule { }
