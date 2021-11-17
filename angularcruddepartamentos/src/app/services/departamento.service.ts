// nota: los archivos contenidos en la carpeta services nos sirven para poder realizar metodos o servicios comunes se podria decir, es una forma de tenerlo todo mas colocado

// nota: para poder realizar uso de este servicio debemos de importarlo en app.module.ts providers y en los componentes donde vayamos a usarlos
import { HttpClient, HttpHeaders } from '@angular/common/http'; // nota: HttpHeaders lo vamos a utilizar para poder realizar el envio del JSON
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Global } from '../Global';

// nota: para poder realizar el servicio de insertarDepartamento vamos a tener que importar el modelo Departamento
import { Departamento } from '../models/departamento';

@Injectable()
export class ServiceDepartamentos {
  // nota: realizamos la inyeccion en nuestro constructor para recuperar las peticiones
  constructor(private _http: HttpClient) {}

  deleteDepartamento(numero: number): Observable<any> {
    var request = '/api/departamentos/' + numero;
    var url = Global.urlapidepartamentos + request;
    console.log(url);
    return this._http.delete(url);
  }

  // nota: updateDepartamento es igual que insertarDepartamento, pero no usamos post sino put
  updateDepartamento(departamento: Departamento): Observable<any> {
    var json = JSON.stringify(departamento);
    var header = new HttpHeaders().set('Content-Type', 'application/json');
    var request = '/api/departamentos';
    var url = Global.urlapidepartamentos + request;
    return this._http.put(url, json, { headers: header });
  }

  insertarDepartamento(departamento: Departamento): Observable<any> {
    // nota: debemos de convertir el objeto a JSON
    var json = JSON.stringify(departamento);
    // nota: debemos indicar que tipo de objeto vamos a enviar, por defecto los servicios estan estipulados para JSON pero no todos
    var header = new HttpHeaders().set('Content-Type', 'application/json');
    var request = '/api/departamentos';
    var url = Global.urlapidepartamentos + request;
    // nota: para hacer el evento post tenemos que enviar primero la url, posteriormente el objeto json y por ultimo la cabecera
    return this._http.post(url, json, { headers: header });
  }

  getDepartamentos(): Observable<any> {
    var request = '/api/departamentos';
    var url = Global.urlapidepartamentos + request;
    // nota: en el return nos devuelve los objetos contenidos en la url
    return this._http.get(url);
  }
}
