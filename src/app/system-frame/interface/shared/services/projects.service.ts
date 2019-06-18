import { Injectable } from '@angular/core';
import { HttpClientService } from './http-client.service';
import { Observable } from 'rxjs';
import { RegistroDeProjeto } from '../models/registro-de-projeto';
import { HttpResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ProjectsService {
  url = 'http://5cfbec68765d4500141fc1d9.mockapi.io/api/v1/project';

  constructor(private HttpClient: HttpClientService) {
  }

  listProjects(): Observable<HttpResponse<RegistroDeProjeto[]>> {
    return this.HttpClient.get<RegistroDeProjeto[]>(this.url);
  }
}
