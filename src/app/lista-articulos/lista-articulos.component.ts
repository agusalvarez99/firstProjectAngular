import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-articulos',
  templateUrl: './lista-articulos.component.html',
  styleUrls: ['./lista-articulos.component.css'],
})
export class ListaArticulosComponent implements OnInit {
  titulo: string = 'List of articles';
  alturaImagen: number = 40;
  margenImagen: number = 2;
  mostrarImagen: boolean = true;
  filtro: string = '';
  articulos: any[] = [
    {
      imagen:
        'https://media.istockphoto.com/vectors/dirty-grunge-hand-drawn-with-brush-strokes-cross-x-vector-isolated-vector-id1201202836?k=20&m=1201202836&s=612x612&w=0&h=0ib7KQaJXonfKN0-tGNaMUIw2Hre9sJjd4hTsc3QwBc=',
      id: 2,
      descripcion: 'Article X',
      codigo: 'xsd-143',
      cantidad: 139,
      precio: 1221.4,
      puntaje: 4,
    },
    {
      imagen:
        'https://png.pngtree.com/png-vector/20210313/ourlarge/pngtree-letter-y-logo-png-png-image_3045053.jpg',
      id: 5,
      descripcion: 'Article Y',
      codigo: 'dlg-912',
      cantidad: 336,
      precio: 400.99,
      puntaje: 3,
    },
  ];
  constructor() {}
  mostrarOcultarImagen(): void {
    this.mostrarImagen = !this.mostrarImagen;
  }

  ngOnInit() {}
}
