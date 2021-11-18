import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Empleado } from 'src/app/models/empleado';
import { ServiceEmpleados } from 'src/app/services/empleado.service';

@Component({
  selector: 'app-empleadosdepartamento',
  templateUrl: './empleadosdepartamento.component.html',
  styleUrls: ['./empleadosdepartamento.component.css'],
})
export class EmpleadosdepartamentoComponent implements OnInit {
  public empleados!: Array<Empleado>;

  constructor(
    private _service: ServiceEmpleados,
    private _route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this._route.params.subscribe((params: Params) => {
      var iddepartamento = params['iddepartamento'];
      this._service
        .getEmpleadosDepartamento(iddepartamento)
        .subscribe((res) => {
          this.empleados = res;
        });
    });
  }
}
