import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ListaArticulosComponent } from './lista-articulos/lista-articulos.component';
import { PuntajeComponent } from './puntaje/puntaje.component';
import { ArticuloFamiliaComponent } from './articulo-familia/articulo-familia.component';
import { PrincipalComponent } from './principal/principal.component';
import { PaginaNoEncontradaComponent } from './pagina-no-encontrada/pagina-no-encontrada.component';
import { DetalleArticuloComponent } from './detalle-articulo/detalle-articulo.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: 'articulo', component: ArticuloFamiliaComponent },
      { path: 'articulo/:id', component: DetalleArticuloComponent },
      { path: 'lista-articulos', component: ListaArticulosComponent },
      { path: '', component: PrincipalComponent },
      { path: '**', component: PaginaNoEncontradaComponent },
    ]),
    HttpClientModule,
  ],
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
