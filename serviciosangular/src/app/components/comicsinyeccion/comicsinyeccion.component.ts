import { Component, OnInit } from '@angular/core';
import { Comic } from 'src/app/models/comic';
import { ComicsService } from 'src/app/services/comics.service';

@Component({
  selector: 'app-comicsinyeccion',
  templateUrl: './comicsinyeccion.component.html',
  styleUrls: ['./comicsinyeccion.component.css'],
  providers: [], // nota: como providers usamos ComicsService, pero lo estamos importando en APPMODULE.ts
})
export class ComicsinyeccionComponent implements OnInit {
  public comics!: Array<Comic>;
  // nota: ponemos private _ service: ComicsService
  constructor(private _service: ComicsService) {}

  ngOnInit(): void {
    this.comics = this._service.getComics();
  }
}
