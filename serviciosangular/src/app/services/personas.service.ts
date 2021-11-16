import { HttpClient } from '@angular/common/http'; // nota: necesario
import { Injectable } from '@angular/core'; // nota: necesario Injectable si o si
import { Observable } from 'rxjs';
import { Global } from '../Global';

@Injectable()
export class PersonasService {
  constructor(private _http: HttpClient) {}
  // nota: en los metodos se suele devolver directamente la promesa, aunque podemos crearnos una promesa como en vue
  getPersonas(): Observable<any> {
    var request = '/api/personas';
    var url = Global.urlpersonas + request;
    return this._http.get(url);
  }
}
