import { Component } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulariobindingmodel.component.html',
  styleUrls: ['./formulariobindingmodel.component.css'],
})
export class FormularioBindingModel {
  public user: any;
  public mensaje: string;

  constructor() {
    this.user = {
      nombre: '',
      apellidos: '',
      edad: 0,
    };

    this.mensaje = '';
  }

  recibirFormulario(): void {
    this.mensaje = 'Datos recibidos!!!';
  }
}
