import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-articulos',
  templateUrl: './lista-articulos.component.html',
  styleUrls: ['./lista-articulos.component.css'],
})
export class ListaArticulosComponent implements OnInit {
  titulo: string = 'List of articles';
  articulos: any[] = [
    {
      id: 2,
      descripcion: 'Article X',
      codigo: 'xsd-143',
      cantidad: 139,
      precio: 1221.4,
      puntaje: 4,
    },
    {
      id: 5,
      descripcion: 'Article Y',
      codigo: 'dlg-912',
      cantidad: 336,
      precio: 400.99,
      puntaje: 3,
    },
  ];
  constructor() {}

  ngOnInit() {}
}
