// Dependencias
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

// Componentes
import { HomeComponent } from './components/home/home.component';
import { LibreriaComponent } from './components/libreria/libreria.component';
import { ComicsinyeccionComponent } from './components/comicsinyeccion/comicsinyeccion.component';
import { PersonasapiComponent } from './components/personasapi/personasapi.component';
import { EmpleadosapiComponent } from './components/empleadosapi/empleadosapi.component';
import { EmpleadosoficioComponent } from './components/empleadosoficio/empleadosoficio.component';

// Rutas
const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'libreria', component: LibreriaComponent },
  { path: 'comicsinyeccion', component: ComicsinyeccionComponent },
  { path: 'personasapi', component: PersonasapiComponent },
  { path: 'empleadosapi', component: EmpleadosapiComponent },
  { path: 'empleadosoficio', component: EmpleadosoficioComponent },
];
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> =
  RouterModule.forRoot(appRoutes);
