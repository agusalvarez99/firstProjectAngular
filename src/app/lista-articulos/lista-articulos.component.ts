import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-articulos',
  templateUrl: './lista-articulos.component.html',
  styleUrls: ['./lista-articulos.component.css'],
})
export class ListaArticulosComponent implements OnInit {
  titulo: string = 'Lista de articulos';
  constructor() {}

  ngOnInit() {}
}