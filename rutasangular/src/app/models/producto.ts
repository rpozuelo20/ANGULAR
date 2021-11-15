export class Producto {
  public nombre: string;
  public imagen: string;
  public precio: number;

  // nota: creamos un constructor para recibir parametros
  constructor(nombre: string, imagen: string, precio: number) {
    // nota: los estamos inicializando con los parametros que hemos recibido, ademas, los parametros que hemos recibido tenemos que especificar de que tipo de dato se trata
    this.nombre = nombre;
    this.imagen = imagen;
    this.precio = precio;
  }
}
