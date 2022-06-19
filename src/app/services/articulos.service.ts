import { Injectable } from '@angular/core';
import { IArticulo } from '../models/iarticulo';

@Injectable({ providedIn: 'root' })
export class ArticulosService {
  constructor() {}

  getArticulos(): IArticulo[] {
    return [
      {
        imagen:
          'https://media.istockphoto.com/vectors/dirty-grunge-hand-drawn-with-brush-strokes-cross-x-vector-isolated-vector-id1201202836?k=20&m=1201202836&s=612x612&w=0&h=0ib7KQaJXonfKN0-tGNaMUIw2Hre9sJjd4hTsc3QwBc=',
        id: 2,
        descripcion: 'Article X',
        codigo: 'xsd-143',
        cantidad: 139,
        precio: 1221.4,
        puntaje: 4.5,
        active: false,
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
        active: true,
      },
    ];
  }
}
