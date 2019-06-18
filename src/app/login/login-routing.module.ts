import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginWindowComponent } from './login-window/login-window.component';

const routes: Routes = [
  {
    path: '',
    component:LoginWindowComponent 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
