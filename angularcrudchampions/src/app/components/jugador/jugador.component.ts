import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Jugador } from 'src/app/models/jugador';
import { ServiceJugadores } from 'src/app/services/jugador.service';

@Component({
  selector: 'app-jugador',
  templateUrl: './jugador.component.html',
  styleUrls: ['./jugador.component.css'],
})
export class JugadorComponent implements OnInit {
  public jugador!: Jugador;

  constructor(
    private _service: ServiceJugadores,
    private _route: ActivatedRoute,
    private _router: Router
  ) {}

  getJugador(): void {
    this._route.params.subscribe((params: Params) => {
      var idjugador = params['idjugador'];
      this._service.getJugador(idjugador).subscribe((res) => {
        this.jugador = res;
      });
    });
  }

  ngOnInit(): void {
    this.getJugador();
  }
}
