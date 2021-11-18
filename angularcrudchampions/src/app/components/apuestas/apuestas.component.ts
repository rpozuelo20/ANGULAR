import { Component, OnInit } from '@angular/core';
import { Apuesta } from 'src/app/models/apuesta';
import { ServiceApuestas } from 'src/app/services/apuesta.service';

@Component({
  selector: 'app-apuestas',
  templateUrl: './apuestas.component.html',
  styleUrls: ['./apuestas.component.css'],
})
export class ApuestasComponent implements OnInit {
  public apuestas!: Array<Apuesta>;

  constructor(private _service: ServiceApuestas) {}

  getApuestas(): void {
    this._service.getApuestas().subscribe((res) => {
      this.apuestas = res;
    });
  }

  ngOnInit(): void {
    this.getApuestas();
  }
}
