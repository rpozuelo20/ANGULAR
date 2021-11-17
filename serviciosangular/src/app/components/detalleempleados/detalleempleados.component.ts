import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Empleado } from 'src/app/models/empleado';
import { ServiceEmpleados } from 'src/app/services/empleado.service';

@Component({
  selector: 'app-detalleempleados',
  templateUrl: './detalleempleados.component.html',
  styleUrls: ['./detalleempleados.component.css'],
})
export class DetalleempleadosComponent implements OnInit {
  public empleado!: Empleado;

  constructor(
    private _service: ServiceEmpleados,
    private _route: ActivatedRoute
  ) {}

  findEmpleado(idempleado: string): void {
    this._service.findEmpleado(idempleado).subscribe((res) => {
      this.empleado = res;
    });
  }

  ngOnInit(): void {
    this._route.params.subscribe((params: Params) => {
      var id = params['idempleado'];
      this.findEmpleado(id);
    });
  }
}
