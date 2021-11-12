import { Component } from '@angular/core';

@Component({
  selector: 'app-deportes',
  templateUrl: './deportes.component.html',
})
export class Deportes {
  public sports: Array<string>;
  public numbers: Array<number>;
  constructor() {
    this.sports = ['Petanca', 'Curling', 'Canicas', 'Futbol', 'Basket'];

    this.numbers = [12, 16, 35, 57, 63, 88, 99];
  }
}
