import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-puntaje',
  templateUrl: './puntaje.component.html',
  styleUrls: ['./puntaje.component.css'],
})
export class PuntajeComponent implements OnChanges {
  @Input() puntaje: number = 4;
  puntajeAncho: number;

  ngOnChanges(): void {
    this.puntajeAncho = (this.puntaje * 68) / 5;
  }
}
