import { Component, OnInit } from '@angular/core';
import { Equipo } from 'src/app/models/equipo';
import { ServiceEquipos } from 'src/app/services/equipo.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  public equipos!: Array<Equipo>;

  constructor(private _service: ServiceEquipos) {}

  getEquipos(): void {
    this._service.getEquipos().subscribe((res) => {
      this.equipos = res;
    });
  }

  ngOnInit(): void {
    this.getEquipos();
  }
}
