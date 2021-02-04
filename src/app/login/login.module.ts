import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { UserAuthenticationComponent } from './user-authentication/user-authentication.component';

import {MatCardModule} from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

import { FlexLayoutModule } from '@angular/flex-layout';

import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [LoginComponent, UserAuthenticationComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    MatCardModule,
    MatTabsModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    FlexLayoutModule,
    ReactiveFormsModule
  ]
})
export class LoginModule { }
