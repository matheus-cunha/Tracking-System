import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent {

  NomeDoProjeto = '';
  daysLeft = 8;
  constructor() {
  }

  SalvarNome( $event: string ) {
    this.NomeDoProjeto = $event;
    this.catchDays();
  }

  catchDays() {
    switch (this.NomeDoProjeto) {
      case 'Projeto 1':
        this.daysLeft = 8;
        break;
      case 'Projeto 2':
        this.daysLeft = 4;
        break;
      case 'Projeto 3':
        this.daysLeft = 3;
        break;
      case 'Projeto 4':
        this.daysLeft = 7;
        break;
      default:
        this.daysLeft = 8;
        break;
    }
  }
}
