import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Global } from '../Global';

@Injectable()
export class ServiceEmpleados {
  constructor(private _http: HttpClient) {}

  getEmpleadosDepartamento(iddepartamento: string): Observable<any> {
    var request = '/api/empleados/empleadosdepartamento/' + iddepartamento;
    var url = Global.urlapiempleadosfullstack + request;
    return this._http.get(url);
  }

  getDetallesEmpleado(idempleado: string): Observable<any> {
    var request = '/api/empleados/' + idempleado;
    var url = Global.urlapiempleadosaction + request;
    return this._http.get(url);
  }

  incrementarSalarioEmpleado(
    idempleado: string,
    incremento: string
  ): Observable<any> {
    var request =
      '/api/empleados/incrementarsalario/' + idempleado + '/' + incremento;
    var url = Global.urlapiempleadosaction + request;
    var header = new HttpHeaders().set('Content-Type', 'application/json');
    return this._http.put(url, { headers: header });
  }
}
