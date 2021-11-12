import { Component, OnInit } from '@angular/core';
// nota: debemos de importar ActivatedRoute para recoger parametros
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-menucollatz',
  templateUrl: './menucollatz.component.html',
  styleUrls: ['./menucollatz.component.css'],
})
export class MenucollatzComponent implements OnInit {
  public numeros!: Array<number>;
  public numero!: number;
  public collatz!: Array<number>;

  constructor(private _activeRoute: ActivatedRoute) {
    this.numeros = new Array<number>();
    this.collatz = new Array<number>();
  }

  generarCollatz(): void {
    for (var i = 1; i <= 10; i++) {
      var aleatorio = 33;
      this.numeros.push(i * aleatorio);
    }
  }

  ngOnInit(): void {
    this.generarCollatz();

    this._activeRoute.params.subscribe((params: Params) => {
      // nota: preguntamos si existe el parametro numero
      if (params['numero'] != null) {
        this.collatz = new Array<number>();
        // nota: asignamos la propiedad para la pagina, ademas siempre vienen como string
        this.numero = parseInt(params['numero']);

        var numero = this.numero;
        while (numero !== 1) {
          numero = numero % 2 === 0 ? numero / 2 : 3 * numero + 1;
          this.collatz.push(numero);
        }
      }
    });
  }
}
