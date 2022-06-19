import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ListaArticulosComponent } from './lista-articulos/lista-articulos.component';
import { PuntajeComponent } from './puntaje/puntaje.component';
import { ArticuloFamiliaComponent } from './articulo-familia/articulo-familia.component';

@NgModule({
  imports: [BrowserModule, FormsModule, ReactiveFormsModule, HttpClientModule],
  declarations: [
    AppComponent,
    HelloComponent,
    ListaArticulosComponent,
    PuntajeComponent,
    ArticuloFamiliaComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
