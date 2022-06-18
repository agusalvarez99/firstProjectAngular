import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-puntaje',
  templateUrl: './puntaje.component.html',
  styleUrls: ['./puntaje.component.css'],
})
export class PuntajeComponent implements OnChanges {
  @Input() puntaje: number = 4;
  puntajeAncho: number;
  @Output() puntajeClicked: EventEmitter<string> = new EventEmitter<string>();

  ngOnChanges(): void {
    this.puntajeAncho = (this.puntaje * 68) / 5;
  }
  onClick(): void {
    //console.log('El puntaje es ' + this.puntaje);
    this.puntajeClicked.emit('El puntaje es: ' + this.puntaje);
  }
}
