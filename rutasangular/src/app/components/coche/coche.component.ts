// nota: para poder recuperar datos de padre e hijo necesitamos Input
// nota: tambien deberemos llamar a Output para enviar los datos
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Coche } from 'src/app/models/coche';

@Component({
  selector: 'app-coche',
  templateUrl: './coche.component.html',
  styleUrls: ['./coche.component.css'],
})
export class CocheComponent implements OnInit {
  @Input() car!: Coche; // nota: le ponemos el @Input()
  public mensaje!: string;
  @Output() seleccionarCoche: EventEmitter<any> = new EventEmitter();

  // nota: metodo para seleccionar un elemento y llamar al padre
  seleccionarCocheHijo(): void {
    // nota: llamamos al metodo padre
    // nota: dentro de emit ira el argumento que queramos enviar, y en el padre lo recuperaremos con la palabra event que recibimos en el metodo
    this.seleccionarCoche.emit(this.car.modelo);
  }

  constructor() {}
  // nota: cuando recibimos objetos input no podemos utilizarlos en el constructor, hay que esperar y hacerlo en el OnInit
  ngOnInit(): void {
    this.comprobarEstado();
  }

  // nota: metodo para comprobar el estado y lanzar mensajes
  comprobarEstado(): boolean {
    if (this.car.estado == false) {
      this.mensaje = 'El coche esta apagado';
      this.car.velocidad = 0;
      return false;
    } else {
      this.mensaje = 'El coche esta encendido';
      return true;
    }
  }

  encenderCoche(): void {
    this.car.estado = !this.car.estado;
    this.comprobarEstado();
  }

  acelerarCoche(): void {
    if (this.comprobarEstado() == false) {
      alert('El coche no esta encendido');
    } else {
      this.car.velocidad = this.car.velocidad + this.car.aceleracion;
      if (this.car.velocidad > this.car.velocidadMaxima) {
        this.car.velocidad = this.car.velocidadMaxima;
      }
    }
  }
}
