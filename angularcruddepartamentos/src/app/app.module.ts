import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// nota: importamos la siguiente dependencia para rutas
import { routing, appRoutingProviders } from './app.routing';
// nota: importamos la siguiente dependencia para las llamadas Api
import { HttpClientModule } from '@angular/common/http';
// nota: importamos la siguiente dependencia para el uso de formularios
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DepartamentosComponent } from './components/departamentos/departamentos.component';
import { MenuComponent } from './components/menu/menu.component';
import { HomeComponent } from './components/home/home.component';
import { ServiceDepartamentos } from './services/departamento.service';
import { InsertardepartamentoComponent } from './components/insertardepartamento/insertardepartamento.component';
import { EditardepartamentoComponent } from './components/editardepartamento/editardepartamento.component';
import { ServiceEmpleados } from './services/empleado.service';
import { EmpleadosdepartamentoComponent } from './components/empleadosdepartamento/empleadosdepartamento.component';
import { IncrementarsalarioempleadoComponent } from './components/incrementarsalarioempleado/incrementarsalarioempleado.component';

@NgModule({
  declarations: [
    AppComponent,
    DepartamentosComponent,
    MenuComponent,
    HomeComponent,
    InsertardepartamentoComponent,
    EditardepartamentoComponent,
    EmpleadosdepartamentoComponent,
    IncrementarsalarioempleadoComponent,
  ],
  imports: [
    BrowserModule,
    routing, // nota: importamos routing para rutas
    HttpClientModule, // nota: necesario para realizar llamadas a las Api?
    FormsModule, // nota: necesario para el uso de formularios
  ],
  providers: [
    appRoutingProviders, // nota: importamos appRoutingProviders para rutas
    ServiceDepartamentos, // nota: importamos el servicio departamentos
    ServiceEmpleados,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
