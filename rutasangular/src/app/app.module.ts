// nota: de esta manera importamos app.routing
import { routing, appRoutingProviders } from './app.routing';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { CinemaComponent } from './components/cinema/cinema.component';
import { TelevisionComponent } from './components/television/television.component';
import { MusicComponent } from './components/music/music.component';
import { MenuComponent } from './components/menu/menu.component';
import { Error404Component } from './components/error404/error404.component';
import { NumerodobleComponent } from './components/numerodoble/numerodoble.component';
import { MenucollatzComponent } from './components/menucollatz/menucollatz.component';
import { ListaproductosComponent } from './components/listaproductos/listaproductos.component';
import { CocheComponent } from './components/coche/coche.component';
import { ConcesionarioComponent } from './components/concesionario/concesionario.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CinemaComponent,
    TelevisionComponent,
    MusicComponent,
    MenuComponent,
    Error404Component,
    NumerodobleComponent,
    MenucollatzComponent,
    ListaproductosComponent,
    CocheComponent,
    ConcesionarioComponent,
  ],
  // nota: dentro de @NgModule imports y providers debemos de escribir routing y appRoutingProviders
  imports: [BrowserModule, routing],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent],
})
export class AppModule {}
