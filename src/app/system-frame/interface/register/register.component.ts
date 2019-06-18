import { Component, OnInit } from '@angular/core';
import { RegistroDeHora } from '../shared/models/register-interface';
import { Observable,  } from 'rxjs';
import { map } from 'rxjs/operators';
import { HoursService } from '../shared/services/hours.service';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {

  displayedColumns: string[] = ['date', 'start' , 'end', 'task', 'obs'];
  dataSource: Observable <RegistroDeHora[]>;
  projeto = '';
  id = 1;

  constructor(private ProjectsService: HoursService) {}

  SalvarNome($event) {
    this.projeto = $event;
    this.selectUrl();
    this.dataSource = this.ProjectsService.listProjects(this.id).pipe(
      map((data: HttpResponse<RegistroDeHora[]>) => data.body)
    );
  }

  ngOnInit() {
    this.selectUrl();
    this.dataSource = this.ProjectsService.listProjects(this.id).pipe(
      map((data: HttpResponse<RegistroDeHora[]>) => data.body)
    );
  }

  selectUrl() {
    switch (this.projeto) {
      case 'Projeto 1':
        this.id = 1;
        break;
      case 'Projeto 2':
        this.id = 2;
        break;
      case 'Projeto 3':
        this.id = 3;
        break;
      case 'Projeto 4':
        this.id = 4;
        break;
      default:
        this.id = 1;
        break;
    }
  }
}
