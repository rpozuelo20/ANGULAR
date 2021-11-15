// nota: debemos de importar las dependencias de Input, Output y EventEmitter para recoger y enviar datos desde el hijo al padre
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
// nota: importamos el modelo de Comic para poder usarlo en el hijo
import { Comic } from 'src/app/models/comic';

@Component({
  selector: 'app-comic',
  templateUrl: './comic.component.html',
  styleUrls: ['./comic.component.css'],
})
export class ComicComponent implements OnInit {
  @Input() comichijo!: Comic; // nota: realizamos la creacion de comic, sera la manera de la data alojada en el modelo
  @Output() comicFavoritoPadre: EventEmitter<any> = new EventEmitter(); // nota: con la sentencia de @Output se podria decir que estamos haciendo una referencia a la funcion del padre para el hijo

  constructor() {}

  // nota: el siguiente metodo envia desde el hijo al padre el dato nombre del comic hijo que pulsemos su boton
  comicFavoritoHijo(): void {
    this.comicFavoritoPadre.emit(this.comichijo.nombre);
  }

  ngOnInit(): void {}
}
