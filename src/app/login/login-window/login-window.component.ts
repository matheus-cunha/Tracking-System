import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-window',
  templateUrl: './login-window.component.html',
  styleUrls: ['./login-window.component.css']
})
export class LoginWindowComponent implements OnInit {

  constructor() {}
  ngOnInit() {}

  showSpinner = false;

  loadData(){
    this.showSpinner = true;
    setTimeout(() =>{
      this.showSpinner = false;
    },10000)
  }

  hide = true;
}
