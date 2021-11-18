import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Apuesta } from 'src/app/models/apuesta';
import { ServiceApuestas } from 'src/app/services/apuesta.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-insertarapuesta',
  templateUrl: './insertarapuesta.component.html',
  styleUrls: ['./insertarapuesta.component.css'],
})
export class InsertarapuestaComponent implements OnInit {
  @ViewChild('cajausuario') cajausuario!: ElementRef;
  @ViewChild('cajaresultado') cajaresultado!: ElementRef;
  @ViewChild('cajafecha') cajafecha!: ElementRef;
  public apuesta!: Apuesta;

  constructor(private _router: Router, private _service: ServiceApuestas) {}

  postApuesta(): void {
    var idapuesta = Math.random() * 55 + 6;
    var usuario = this.cajausuario.nativeElement.value;
    var resultado = this.cajaresultado.nativeElement.value;
    var fecha = this.cajafecha.nativeElement.value;
    var apuesta = new Apuesta(idapuesta, usuario, resultado, fecha);

    this._service.postApuesta(apuesta).subscribe((res) => {
      this._router.navigate(['/apuestas']);
    });
  }
  ngOnInit(): void {}
}
