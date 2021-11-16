import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Empleado2 } from 'src/app/models/empleado2';
import { Empleados2Service } from 'src/app/services/empleados2.service';

@Component({
  selector: 'app-empleadosoficio',
  templateUrl: './empleadosoficio.component.html',
  styleUrls: ['./empleadosoficio.component.css'],
})
export class EmpleadosoficioComponent implements OnInit {
  public empleados!: Array<Empleado2>;
  public oficios!: Array<any>;

  @ViewChild('selectoficios') selectoficios!: ElementRef;
  constructor(private _service: Empleados2Service) {}

  ngOnInit(): void {
    this.mostrarOficios();
  }
  mostrarOficios(): void {
    this._service.getOficios().subscribe((res) => {
      this.oficios = res;
    });
  }

  mostrarEmpleados(): void {
    var oficio = this.selectoficios.nativeElement.value;
    this._service.getEmpleadosOficio(oficio).subscribe((res) => {
      this.empleados = res;
    });
  }
}
