import { Component, OnInit } from '@angular/core';
import { Coche } from 'src/app/models/coche';

@Component({
  selector: 'app-concesionario',
  templateUrl: './concesionario.component.html',
  styleUrls: ['./concesionario.component.css'],
})
export class ConcesionarioComponent implements OnInit {
  public coches: Array<Coche>;
  public mensaje!: string;

  // nota: desde event decimos que es de tipo string ya que el dato que recuperamos desde el hijo es string, simplemente lo pintamos en el mensaje
  seleccionarCochePadre(event: string): void {
    this.mensaje = 'Coche seleccionado!!! ' + event;
  }

  constructor() {
    this.coches = [
      new Coche('Ford', 'Mustang', 0, 320, 30, false),
      new Coche('Kia', 'Picanto', 0, 150, 5, false),
      new Coche('Citroen', 'C4', 0, 170, 10, false),
    ];
  }

  ngOnInit(): void {}
}
