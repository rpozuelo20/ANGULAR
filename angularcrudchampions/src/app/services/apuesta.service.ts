import { HttpClient, HttpHeaders } from '@angular/common/http'; // nota: HttpHeaders lo vamos a utilizar para poder realizar el envio del JSON
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Global } from '../Global';

import { Apuesta } from '../models/apuesta';

@Injectable()
export class ServiceApuestas {
  constructor(private _http: HttpClient) {}

  getApuestas(): Observable<any> {
    var request = '/api/Apuestas';
    var url = Global.urlapichampions + request;
    return this._http.get(url);
  }

  postApuesta(apuesta: Apuesta): Observable<any> {
    var json = JSON.stringify(apuesta);
    var header = new HttpHeaders().set('Content-Type', 'application/json');
    var request = '/api/Apuestas';
    var url = Global.urlapichampions + request;
    return this._http.post(url, json, { headers: header });
  }
}
