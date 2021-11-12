import { Component, OnInit } from '@angular/core';
// nota: debemos de importar ActivatedRoute para recoger parametros
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-numerodoble',
  templateUrl: './numerodoble.component.html',
  styleUrls: ['./numerodoble.component.css'],
})
export class NumerodobleComponent implements OnInit {
  public numero!: number;
  public doble!: number;
  // nota: necesitamos recibir el objeto ActivatedRoute para recuperar parametros, en angular los objetos inyectados se denominan con guion bajo
  constructor(private _activeRoute: ActivatedRoute, private _router: Router) {
    // nota: aqui es donde se recuperan los parametros, se utiliza una promesa llamada subscribe que trae Params con los parametros por su name
  }

  redirect(num: number): void {
    this._router.navigate(['/numerodoble', num]);
  }

  ngOnInit(): void {
    this._activeRoute.params.subscribe((params: Params) => {
      // nota: preguntamos si existe el parametro numero
      if (params['numero'] != null) {
        // nota: asignamos la propiedad para la pagina, ademas siempre vienen como string
        this.numero = parseInt(params['numero']);
        this.doble = this.numero * 2;
      }
    });
  }
}
