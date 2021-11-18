// nota: para poder utilizar las rutas es necesario lo primero crear el archivo app.routing.ts que contendra los path, una vez creado el archivo vamos a app.module.ts e importamos las siguientes dependencias { routing, appRoutingProviders } desde nuestro archivo app.routing.ts, en @NgModule debemos de agregar routing en import y appRoutingProviders en providers

// nota: dentro del componente app-menu, para poder hacer uso de las rutas debemos de usar la siguiente sentencia dentro de las "<a></a>", <a [routerLink]="['/laruta']">LaRuta</a>.

// Dependencias
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

// Componentes
import { HomeComponent } from './components/home/home.component';
import { DepartamentosComponent } from './components/departamentos/departamentos.component';
import { InsertardepartamentoComponent } from './components/insertardepartamento/insertardepartamento.component';
import { EditardepartamentoComponent } from './components/editardepartamento/editardepartamento.component';
import { EmpleadosdepartamentoComponent } from './components/empleadosdepartamento/empleadosdepartamento.component';
import { IncrementarsalarioempleadoComponent } from './components/incrementarsalarioempleado/incrementarsalarioempleado.component';

// Rutas
const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'departamentos', component: DepartamentosComponent },
  { path: 'insertardepartamento', component: InsertardepartamentoComponent },
  {
    path: 'editar/:numero/:nombre/:localidad',
    component: EditardepartamentoComponent,
  },
  {
    path: 'empleados/:iddepartamento',
    component: EmpleadosdepartamentoComponent,
  },
  {
    path: 'incrementarsalario/:idempleado',
    component: IncrementarsalarioempleadoComponent,
  },
];
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> =
  RouterModule.forRoot(appRoutes);
