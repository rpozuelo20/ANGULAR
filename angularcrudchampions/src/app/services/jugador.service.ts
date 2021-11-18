import { HttpClient, HttpHeaders } from '@angular/common/http'; // nota: HttpHeaders lo vamos a utilizar para poder realizar el envio del JSON
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Global } from '../Global';

import { Jugador } from '../models/jugador';

@Injectable()
export class ServiceJugadores {
  constructor(private _http: HttpClient) {}

  getJugadores(idequipo: number): Observable<any> {
    var request = '/api/Jugadores/JugadoresEquipo/' + idequipo;
    var url = Global.urlapichampions + request;
    return this._http.get(url);
  }

  getJugador(idjugador: number): Observable<any> {
    var request = '/api/Jugadores/' + idjugador;
    var url = Global.urlapichampions + request;
    return this._http.get(url);
  }
}
