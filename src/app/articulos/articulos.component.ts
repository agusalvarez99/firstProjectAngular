import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ArticulosFamilias } from '../models/articulos-familias';

@Component({
  selector: 'app-articulos',
  templateUrl: './articulos.component.html',
  styleUrls: ['./articulos.component.css'],
})
export class ArticulosComponent implements OnInit {
  fg: FormGroup;
  Familias = [];
  OpcionesActivo = [
    { Id: null, Nombre: '' },
    { Id: true, Nombre: 'SI' },
    { Id: false, Nombre: 'NO' },
  ];

  constructor(public FormBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.Familias = ArticulosFamilias;
    this.fg = this.FormBuilder.group({
      IdArticulo: [0],
      Nombre: [''],
      Precio: [null],
      Stock: [null],
      CodigoDeBarra: [''],
      IdArticuloFamilia: [''],
      FechaAlta: [''],
      Activo: [true],
    });
  }
}
