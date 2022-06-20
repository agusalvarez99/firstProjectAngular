import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  Submitted: boolean = false;

  constructor(public FormBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.Familias = ArticulosFamilias;
    this.fg = this.FormBuilder.group({
      IdArticulo: [0],
      Nombre: [
        '',
        [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(55),
        ],
      ],
      Precio: [null, [Validators.required, Validators.pattern('[0-9]{1,7}')]],
      Stock: [null, [Validators.required]],
      CodigoDeBarra: [
        '',
        [Validators.required, Validators.pattern('[0-9]{13}')],
      ],
      IdArticuloFamilia: ['', [Validators.required]],
      FechaAlta: ['', [Validators.required]],
      Activo: [true, [Validators.required]],
    });
  }
  Grabar() {
    this.Submitted = true;
    if (this.fg.invalid) {
      window.alert('Formulario invalido!');
    } else {
      window.alert('Todo OK!');
    }
  }
}
