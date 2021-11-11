import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core';

@Component({
  selector: 'hooks-angular',
  templateUrl: './hooksangular.component.html',
  styleUrls: ['./hooksangular.components.css'],
})
export class HooksAngular implements OnInit {
  public mensaje: string;
  constructor() {
    console.log('Constructor, yo voy primero');
    this.mensaje = 'Mensaje desde Component';
  }
  // nota: void indica que estamos creando un metodo
  ngOnInit(): void {
    console.log('ngOnInit(): Ejecutando despues del constructor');
  }
  ngDoCheck() {
    console.log('ngDoCheck(): La vista ha cambiado');
  }
  ngOnDestroy(): void {
    console.log('ngOnDestroy(): Componente destruido');
  }
  cambiarMensaje(): void {
    this.mensaje = 'Single Day!!!';
  }
}
