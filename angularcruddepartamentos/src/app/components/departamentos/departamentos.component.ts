import { Component, OnInit } from '@angular/core';
// nota: tenemos que importar el modelo y servicio que vayamos a utilizar
import { Departamento } from 'src/app/models/departamento';
import { ServiceDepartamentos } from 'src/app/services/departamento.service';

@Component({
  selector: 'app-departamentos',
  templateUrl: './departamentos.component.html',
  styleUrls: ['./departamentos.component.css'],
})
export class DepartamentosComponent implements OnInit {
  // nota: creamos el Array departamentos que se basara en el modelo Departamento
  public departamentos!: Array<Departamento>;
  // nota: realizamos el constructor del servicio departamentos
  constructor(private _service: ServiceDepartamentos) {}
  // nota: al iniciarse vamos a ejecutar el metodo getDepartamentos y lo vamos a subscribir, nos devolvera una respuesta que son los objetos alojados en la url y los pintara en nuestro Array departamentos
  eliminarDepartamento(numero: number): void {
    this._service.deleteDepartamento(numero).subscribe((res) => {
      this.cargarDepartamentos();
    });
  }

  cargarDepartamentos(): void {
    this._service.getDepartamentos().subscribe((res) => {
      this.departamentos = res;
    });
  }

  ngOnInit(): void {
    this._service.getDepartamentos().subscribe((res) => {
      this.departamentos = res;
    });
  }
}
