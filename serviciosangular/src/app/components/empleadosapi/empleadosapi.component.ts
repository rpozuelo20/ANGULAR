import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Empleado } from 'src/app/models/empleado';
import { EmpleadosService } from 'src/app/services/empleados.service';

@Component({
  selector: 'app-empleadosapi',
  templateUrl: './empleadosapi.component.html',
  styleUrls: ['./empleadosapi.component.css'],
})
export class EmpleadosapiComponent implements OnInit {
  public empleados!: Array<Empleado>;
  @ViewChild('cajasalario') cajasalario!: ElementRef;
  constructor(private _service: EmpleadosService) {}

  ngOnInit(): void {}

  mostrarEmpleados(): void {
    var salario = this.cajasalario.nativeElement.value;
    this._service.getEmpleadosSalario(salario).subscribe((res) => {
      this.empleados = res;
    });
  }
}
