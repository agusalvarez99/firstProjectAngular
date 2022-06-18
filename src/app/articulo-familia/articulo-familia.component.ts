import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-articulo-familia',
  templateUrl: './articulo-familia.component.html',
  styleUrls: ['./articulo-familia.component.css'],
})
export class ArticuloFamiliaComponent implements OnInit {
  frmArticulos: FormGroup;
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.frmArticulos = this.fb.group({
      IdArticuloFamilia: [0],
      Familia: [''],
    });
  }
  mostrar(): void {
    alert(
      'Id articulo es: ' +
        this.frmArticulos.value.IdArticuloFamilia +
        ' y la familia es: ' +
        this.frmArticulos.value.Familia
    );
  }
  limpiar(): void {
    this.frmArticulos.reset({
      IdArticuloFamilia: [0],
      Familia: [''],
    });
  }
}
