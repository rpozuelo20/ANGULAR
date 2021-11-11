// nota: importamos Component
import { Component } from '@angular/core';

// nota: @Component es la declaracion de lo que va a tener nuestro component
@Component({
  // nota: indicamos el nombre de nuestro component
  selector: 'first-component',
  templateUrl: './firstcomponent.component.html',
  styleUrls: ['./firstcomponent.component.css'],
})
export class FirstComponent {
  public titulo: string;
  public descripcion: string;
  public anyo: number;
  public ocultar: boolean;
  // nota: inicializamos las propiedades en el constructor
  constructor() {
    this.titulo = 'Hoy es jueves de Angular';
    this.descripcion = 'Aprendiendo Angular a tope';
    this.anyo = 2021;
    this.ocultar = false;
  }

  ocultarComponente(): void {
    this.ocultar = true;
  }
}
