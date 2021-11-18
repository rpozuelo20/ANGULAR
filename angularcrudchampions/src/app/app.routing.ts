import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { HomeComponent } from './components/home/home.component';
import { ApuestasComponent } from './components/apuestas/apuestas.component';
import { EquipoComponent } from './components/equipo/equipo.component';
import { JugadoresComponent } from './components/jugadores/jugadores.component';
import { JugadorComponent } from './components/jugador/jugador.component';
import { InsertarapuestaComponent } from './components/insertarapuesta/insertarapuesta.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'apuestas', component: ApuestasComponent },
  { path: 'equipo/:idequipo', component: EquipoComponent },
  { path: 'jugadores/:idequipo', component: JugadoresComponent },
  { path: 'jugador/:idjugador', component: JugadorComponent },
  { path: 'insertarapuesta', component: InsertarapuestaComponent },
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> =
  RouterModule.forRoot(appRoutes);
