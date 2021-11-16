import { Component, OnInit, ViewChild, ElementRef } from '@angular/core'; // nota: importamos ViewChild y ElementRef para el formulario, para recoger los valores de los inputs
// nota: importamos el modelo Comic alojado en la carpeta models, de esta manera se podria decir que trabajariamos mediante una plantilla de cada comic
import { Comic } from 'src/app/models/comic';
import { ComicsService } from 'src/app/services/comics.service';

@Component({
  selector: 'app-libreria',
  templateUrl: './libreria.component.html',
  styleUrls: ['./libreria.component.css'],
})
export class LibreriaComponent implements OnInit {
  // nota: creamos un elemento comics que va a ser un array que trabajaremos sobre la plantilla del modelo Comic
  public comics!: Array<Comic>;
  public comicFavorito!: Comic;

  // nota: para poder agregar objetos, primero creamos las 3 referencias que recuperaran el valor del formulario
  @ViewChild('comicnom') comicnom!: ElementRef;
  @ViewChild('comicimg') comicimg!: ElementRef;
  @ViewChild('comicdet') comicdet!: ElementRef;
  // nota: en agregarComic creamos variables para los distintos valores, un objeto newcomic que sera un new Comic con los valores y realizaremos un push
  agregarComic(): void {
    var nombre = this.comicnom.nativeElement.value;
    var imagen = this.comicimg.nativeElement.value;
    var detalles = this.comicdet.nativeElement.value;
    var newcomic = new Comic(nombre, imagen, detalles);
    this.comics.push(newcomic);
  }

  modificarComicPadre(event: number): void {
    var nombre = this.comicnom.nativeElement.value;
    var imagen = this.comicimg.nativeElement.value;
    var detalles = this.comicdet.nativeElement.value;
    this.comics[event] = new Comic(nombre, imagen, detalles);
  }

  eliminarComicPadre(event: number): void {
    this.comics.splice(event, 1);
  }

  comicFavoritoPadre(event: Comic): void {
    this.comicFavorito = event;
  }

  constructor(private _service: ComicsService) {}

  ngOnInit(): void {
    this.comics = this._service.getComics();
  }
}
