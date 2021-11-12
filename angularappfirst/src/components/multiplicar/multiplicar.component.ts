import { Component, ViewChild, ElementRef } from '@angular/core';
// nota: recordemos que para poder realizar referencias parecidas a react es necesario que importemos ViewChild y ElementRef

@Component({
  selector: 'app-multiplicar',
  templateUrl: './multiplicar.component.html',
})
export class Multiplicar {
  @ViewChild('cajanumero') cajanumero!: ElementRef;
  public numeros!: Array<number>;
  public numero!: number;

  // nota: en el constructor iniciamos la variable numeros, por que la necesitamos para el html ya que estamos diciendo que *ngIf="numeros.length > 0", en caso de no querer inicializarla podriamos poner en el html *ngIf="numeros!=null"
  constructor() {
    this.numeros = new Array<number>();
  }

  generarTablaMultiplicar(): void {
    this.numero = parseInt(this.cajanumero.nativeElement.value);
    // nota: con new Array<number>() se podria decir que estamos limpiando el array cada vez que la funcion es ejecutada, asi nos evitamos que el array se vaya concatenando
    this.numeros = new Array<number>();
    for (var i = 1; i <= 10; i++) {
      var operacion = this.numero * i;
      this.numeros.push(operacion);
    }
  }
}
