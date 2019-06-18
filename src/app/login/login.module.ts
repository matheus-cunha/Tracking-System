import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { LoginRoutingModule } from './login-routing.module';
import { LoginWindowComponent } from './login-window/login-window.component';
import { MatProgressSpinnerModule } from '@angular/material';

@NgModule({
  declarations: [LoginWindowComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    MatProgressSpinnerModule,
    MatFormFieldModule,
    MatInputModule
  ]
})
export class LoginModule { }
