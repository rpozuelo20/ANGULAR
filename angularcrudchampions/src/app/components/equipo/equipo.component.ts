import { Component, OnInit } from '@angular/core';
import { Equipo } from 'src/app/models/equipo';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ServiceEquipos } from 'src/app/services/equipo.service';

@Component({
  selector: 'app-equipo',
  templateUrl: './equipo.component.html',
  styleUrls: ['./equipo.component.css'],
})
export class EquipoComponent implements OnInit {
  public equipo!: Equipo;

  constructor(
    private _service: ServiceEquipos,
    private _route: ActivatedRoute,
    private _router: Router
  ) {}

  getEquipo(): void {
    this._route.params.subscribe((params: Params) => {
      var idequipo = params['idequipo'];
      this._service.getEquipo(idequipo).subscribe((res) => {
        this.equipo = res;
      });
    });
  }

  ngOnInit(): void {
    this.getEquipo();
  }
}
