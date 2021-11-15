import { Component, OnInit, ViewChild, ElementRef } from '@angular/core'; // nota: importamos ViewChild y ElementRef para el formulario, para recoger los valores de los inputs
// nota: importamos el modelo Comic alojado en la carpeta models, de esta manera se podria decir que trabajariamos mediante una plantilla de cada comic
import { Comic } from 'src/app/models/comic';

@Component({
  selector: 'app-libreria',
  templateUrl: './libreria.component.html',
  styleUrls: ['./libreria.component.css'],
})
export class LibreriaComponent implements OnInit {
  // nota: creamos un elemento comics que va a ser un array que trabajaremos sobre la plantilla del modelo Comic
  public comics: Array<Comic>;
  public comicFavorito!: string;

  @ViewChild('comicnom') comicnom: ElementRef;
  @ViewChild('comicimg') comicimg: ElementRef;
  @ViewChild('comicdet') comicdet: ElementRef;
  public comic!: object;

  agregarComic(): void {
    var comic = {
      nombre: this.comicnom,
      imagen: this.comicimg,
      detalles: this.comicdet,
    };
    this.comics.push(comic);
  }

  comicFavoritoPadre(event: string): void {
    this.comicFavorito = 'El comic favorito es ' + event;
  }

  constructor() {
    this.comicnom = new ElementRef('');
    this.comicimg = new ElementRef('');
    this.comicdet = new ElementRef('');
    // nota: realizamos el constructor de comics, alojamos los comics que se dispondra comics al iniciar la pagina
    this.comics = [
      new Comic(
        'Spiderman',
        'https://images-na.ssl-images-amazon.com/images/I/61AYfL5069L.jpg',
        'Hombre araña'
      ),
      new Comic(
        'Wolverine',
        'https://i.etsystatic.com/9340224/r/il/42f0e1/1667448004/il_570xN.1667448004_sqy0.jpg',
        'Lobezno'
      ),
      new Comic(
        'Guardianes de la Galaxia',
        'https://cdn.normacomics.com/media/catalog/product/cache/1/thumbnail/9df78eab33525d08d6e5fb8d27136e95/g/u/guardianes_galaxia_guadianes_infinito.jpg',
        'Yo soy Groot'
      ),
      new Comic(
        'Avengers',
        'https://d26lpennugtm8s.cloudfront.net/stores/057/977/products/ma_avengers_01_01-891178138c020318f315132687055371-640-0.jpg',
        'Los Vengadores'
      ),
      new Comic(
        'Spawn',
        'https://i.pinimg.com/originals/e1/d8/ff/e1d8ff4aeab5e567798635008fe98ee1.png',
        'Todd MacFarlane'
      ),
    ];
  }

  ngOnInit(): void {}
}
