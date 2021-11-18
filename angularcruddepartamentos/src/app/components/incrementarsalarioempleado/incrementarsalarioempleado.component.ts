import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Empleado } from 'src/app/models/empleado';
import { ServiceEmpleados } from 'src/app/services/empleado.service';

@Component({
  selector: 'app-incrementarsalarioempleado',
  templateUrl: './incrementarsalarioempleado.component.html',
  styleUrls: ['./incrementarsalarioempleado.component.css'],
})
export class IncrementarsalarioempleadoComponent implements OnInit {
  @ViewChild('cajaincremento') cajaincremento!: ElementRef;
  public empleado!: Empleado;

  constructor(
    private _service: ServiceEmpleados,
    private _route: ActivatedRoute,
    private _router: Router
  ) {}

  recuperarEmpleado(): void {
    var idempleado = this.empleado.idEmpleado.toString();
    this._service.getDetallesEmpleado(idempleado).subscribe((res) => {
      this.empleado = res;
    });
  }

  incrementarSalario(): void {
    var incremento = this.cajaincremento.nativeElement.value;
    var id = this.empleado.idEmpleado.toString();
    this._service
      .incrementarSalarioEmpleado(id, incremento)
      .subscribe((res) => {
        this.recuperarEmpleado();
      });
  }

  ngOnInit(): void {
    this._route.params.subscribe((params: Params) => {
      var idempleado = params['idempleado'];
      this._service.getDetallesEmpleado(idempleado).subscribe((res) => {
        this.empleado = res;
      });
    });
  }
}
