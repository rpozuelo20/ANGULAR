import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { routing, appRoutingProviders } from './app.routing';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { ServiceEquipos } from './services/equipo.service';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { MenuComponent } from './components/menu/menu.component';
import { ApuestasComponent } from './components/apuestas/apuestas.component';
import { EquipoComponent } from './components/equipo/equipo.component';
import { JugadoresComponent } from './components/jugadores/jugadores.component';
import { JugadorComponent } from './components/jugador/jugador.component';
import { ServiceJugadores } from './services/jugador.service';
import { ServiceApuestas } from './services/apuesta.service';
import { InsertarapuestaComponent } from './components/insertarapuesta/insertarapuesta.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    ApuestasComponent,
    EquipoComponent,
    JugadoresComponent,
    JugadorComponent,
    InsertarapuestaComponent,
  ],
  imports: [BrowserModule, routing, HttpClientModule, FormsModule],
  providers: [
    appRoutingProviders,
    ServiceApuestas,
    ServiceEquipos,
    ServiceJugadores,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
