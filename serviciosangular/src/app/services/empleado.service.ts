import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Global } from '../Global';
@Injectable()
export class ServiceEmpleados {
  constructor(private _http: HttpClient) {}
  getEmpleados(): Observable<any> {
    var request = '/api/empleados';
    var url = Global.urlempleados + request;
    return this._http.get(url);
  }
  findEmpleado(idempleado: string): Observable<any> {
    var request = '/api/empleados/' + idempleado;
    var url = Global.urlempleados + request;
    return this._http.get(url);
  }
}
