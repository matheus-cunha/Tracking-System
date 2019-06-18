import { Injectable } from '@angular/core';
import { HttpClientService } from './http-client.service';
import { Observable } from 'rxjs';
import { RegistroDeHora } from '../models/register-interface';
import { HttpResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HoursService {
  url = 'http://5cfbec68765d4500141fc1d9.mockapi.io/api/v1/project/';

  constructor(private HttpClient: HttpClientService) {
  }

  listProjects(id: number): Observable<HttpResponse<RegistroDeHora[]>> {
    return this.HttpClient.get<RegistroDeHora[]>(this.url + id + '/hours');
  }
}
