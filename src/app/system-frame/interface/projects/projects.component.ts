import { Component, OnInit } from '@angular/core';
import { RegistroDeProjeto } from '../shared/models/registro-de-projeto';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ProjectsService } from '../shared/services/projects.service';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})

export class ProjectsComponent implements OnInit {

  displayedColumns: string[] = ['project', 'leader' , 'status'];
  dataSource: Observable <RegistroDeProjeto[]>;

  constructor(private ProjectsService: ProjectsService) {
  }

  ngOnInit() {
    this.dataSource = this.ProjectsService.listProjects().pipe(
      map((data: HttpResponse<RegistroDeProjeto[]>) => data.body)
    );
  }

}
