import { HttpClient } from '@angular/common/http'; // nota: necesario
import { Injectable } from '@angular/core'; // nota: necesario Injectable si o si
import { Observable } from 'rxjs';
import { Global } from '../Global';

@Injectable()
export class Empleados2Service {
  constructor(private _http: HttpClient) {}
  // nota: en los metodos se suele devolver directamente la promesa, aunque podemos crearnos una promesa como en vue
  getEmpleadosOficio(oficio: string): Observable<any> {
    var request = 'api/Empleados/EmpleadosOficio/' + oficio;
    var url = Global.urlempleados + request;
    return this._http.get(url);
  }
  getOficios(): Observable<any> {
    var request = 'api/Empleados/oficios';
    var url = Global.urlempleados + request;
    return this._http.get(url);
  }
}
