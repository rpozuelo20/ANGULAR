import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Jugador } from 'src/app/models/jugador';
import { ServiceJugadores } from 'src/app/services/jugador.service';

@Component({
  selector: 'app-jugadores',
  templateUrl: './jugadores.component.html',
  styleUrls: ['./jugadores.component.css'],
})
export class JugadoresComponent implements OnInit {
  public jugadores!: Array<Jugador>;

  constructor(
    private _service: ServiceJugadores,
    private _route: ActivatedRoute,
    private _router: Router
  ) {}

  getJugadores(): void {
    this._route.params.subscribe((params: Params) => {
      var idequipo = params['idequipo'];
      this._service.getJugadores(idequipo).subscribe((res) => {
        this.jugadores = res;
      });
    });
  }

  ngOnInit(): void {
    this.getJugadores();
  }
}
