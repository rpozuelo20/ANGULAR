import { Component, OnInit, ViewChild, ElementRef } from '@angular/core'; // nota: estamos importando ViewChild y ElementRef para recuperar valores del formulario
import { Router, ActivatedRoute, Params } from '@angular/router'; // nota: necesitamos Router para poder realizar la redireccion de la url ademas de Params para los parametros
import { Departamento } from 'src/app/models/departamento';
import { ServiceDepartamentos } from 'src/app/services/departamento.service';

@Component({
  selector: 'app-editardepartamento',
  templateUrl: './editardepartamento.component.html',
  styleUrls: ['./editardepartamento.component.css'],
})
export class EditardepartamentoComponent implements OnInit {
  public departamento!: Departamento;
  @ViewChild('cajanumero') cajanumero!: ElementRef;
  @ViewChild('cajanombre') cajanombre!: ElementRef;
  @ViewChild('cajalocalidad') cajalocalidad!: ElementRef;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _service: ServiceDepartamentos
  ) {}

  updateDepartamento(): void {
    var nombre = this.cajanombre.nativeElement.value;
    var localidad = this.cajalocalidad.nativeElement.value;
    this.departamento.nombre = nombre;
    this.departamento.localidad = localidad;
    this._service.updateDepartamento(this.departamento).subscribe((res) => {
      this._router.navigate(['/departamentos']);
    });
  }

  ngOnInit(): void {
    this._route.params.subscribe((params: Params) => {
      var numero = parseInt(params['numero']);
      this.departamento = new Departamento(
        numero,
        params['nombre'],
        params['localidad']
      );
    });
  }
}
