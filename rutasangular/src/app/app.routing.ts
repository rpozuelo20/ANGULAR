import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

// nota: necesitamos importar los componentes que vayamos a utilizar
import { CinemaComponent } from './components/cinema/cinema.component';
import { HomeComponent } from './components/home/home.component';
import { MusicComponent } from './components/music/music.component';
import { TelevisionComponent } from './components/television/television.component';
import { Error404Component } from './components/error404/error404.component';
import { NumerodobleComponent } from './components/numerodoble/numerodoble.component';
import { MenucollatzComponent } from './components/menucollatz/menucollatz.component';
import { ListaproductosComponent } from './components/listaproductos/listaproductos.component';
import { ConcesionarioComponent } from './components/concesionario/concesionario.component';

// nota: definimos el array de rutas para la navegacion que es de tipo Routes
const appRoutes: Routes = [
  // nota: en path la barra ya esta implicita
  { path: '', component: HomeComponent },
  { path: 'cinema', component: CinemaComponent },
  { path: 'home', component: HomeComponent },
  { path: 'music', component: MusicComponent },
  { path: 'television', component: TelevisionComponent },
  { path: 'listaproductos', component: ListaproductosComponent },
  { path: 'concesionario', component: ConcesionarioComponent },
  { path: 'menucollatz', component: MenucollatzComponent },
  { path: 'menucollatz/:numero', component: MenucollatzComponent },
  // nota: una de las rutas recibe :numero, ademas, el orden de los path debe de ser lineal, por  lo que si hay una ruta padre que va a tener hijos primero la padre y luego hijos
  { path: 'numerodoble', component: NumerodobleComponent },
  { path: 'numerodoble/:numero', component: NumerodobleComponent },
  // nota: la siguiente ruta va a ser para el control de errores, se hace con doble asterisco, pero en vue o react seria con solo un asterisco, y ademas debe de estar como la ultima ruta puesta
  { path: '**', component: Error404Component },
];

// nota: de esta clase se exportan dos elementos, el primero es el proveedor de rutas, que es un array vacio
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> =
  RouterModule.forRoot(appRoutes);
