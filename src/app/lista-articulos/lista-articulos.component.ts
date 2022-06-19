import { Component, OnInit } from '@angular/core';
import { ArticulosService } from '../services/articulos.service';
import { IArticulo } from '../models/iarticulo';

@Component({
  selector: 'app-lista-articulos',
  templateUrl: './lista-articulos.component.html',
  styleUrls: ['./lista-articulos.component.css'],
  providers: [ArticulosService],
})
export class ListaArticulosComponent implements OnInit {
  titulo: string = 'List of articles';
  alturaImagen: number = 40;
  margenImagen: number = 2;
  mostrarImagen: boolean = true;
  filtro: string = '';
  articulos: IArticulo[] = [];

  constructor(private articulosService: ArticulosService) {}
  mostrarOcultarImagen(): void {
    this.mostrarImagen = !this.mostrarImagen;
  }
  onPuntajeClicked(mensaje: string): void {
    this.titulo = 'El puntaje es ' + mensaje;
  }

  ngOnInit() {
    this.articulos = this.articulosService.getArticulos();
  }
}
