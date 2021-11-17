import { Component, OnInit, ViewChild, ElementRef } from '@angular/core'; // nota: estamos importando ViewChild y ElementRef para recuperar valores del formulario
import { Router } from '@angular/router'; // nota: necesitamos Router para poder realizar la redireccion de la url
import { Departamento } from 'src/app/models/departamento';
import { ServiceDepartamentos } from 'src/app/services/departamento.service';

@Component({
  selector: 'app-insertardepartamento',
  templateUrl: './insertardepartamento.component.html',
  styleUrls: ['./insertardepartamento.component.css'],
})
export class InsertardepartamentoComponent implements OnInit {
  // nota: realizamos las referencias del formulario
  @ViewChild('cajanumero') cajanumero!: ElementRef;
  @ViewChild('cajanombre') cajanombre!: ElementRef;
  @ViewChild('cajalocalidad') cajalocalidad!: ElementRef;

  // nota: inicializamos en el constructor el Router y el ServiceDepartamentos
  constructor(
    private _router: Router,
    private _service: ServiceDepartamentos
  ) {}

  insertarDepartamento(): void {
    var numero = this.cajanumero.nativeElement.value;
    var nombre = this.cajanombre.nativeElement.value;
    var localidad = this.cajalocalidad.nativeElement.value;
    var departamento = new Departamento(parseInt(numero), nombre, localidad);
    if (numero && nombre && localidad) {
      this._service.insertarDepartamento(departamento).subscribe((res) => {
        this._router.navigate(['/departamentos']);
      });
    } else {
      console.log('Err getting "departamento" values');
      alert('Es necesario que rellene todo el formulario antes de enviarlo.');
    }
  }

  ngOnInit(): void {}
}
