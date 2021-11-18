import { HttpClient, HttpHeaders } from '@angular/common/http'; // nota: HttpHeaders lo vamos a utilizar para poder realizar el envio del JSON
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Global } from '../Global';

import { Equipo } from '../models/equipo';

@Injectable()
export class ServiceEquipos {
  constructor(private _http: HttpClient) {}

  getEquipos(): Observable<any> {
    var request = '/api/Equipos';
    var url = Global.urlapichampions + request;
    return this._http.get(url);
  }

  getEquipo(idequipo: number): Observable<any> {
    var request = '/api/Equipos/' + idequipo;
    var url = Global.urlapichampions + request;
    return this._http.get(url);
  }
}
