import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routing, appRoutingProviders } from './app.routing'; // nota: importamos las siguientes dependencias para poder utilizar las rutas
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { HomeComponent } from './components/home/home.component';
import { ComicComponent } from './components/comic/comic.component';
import { LibreriaComponent } from './components/libreria/libreria.component';
import { FormsModule } from '@angular/forms';
import { ComicsinyeccionComponent } from './components/comicsinyeccion/comicsinyeccion.component';
import { ComicsService } from './services/comics.service';
import { PersonasapiComponent } from './components/personasapi/personasapi.component';
import { PersonasService } from './services/personas.service';
import { EmpleadosService } from './services/empleados.service';
import { EmpleadosapiComponent } from './components/empleadosapi/empleadosapi.component';
import { EmpleadosoficioComponent } from './components/empleadosoficio/empleadosoficio.component';
import { Empleados2Service } from './services/empleados2.service';
import { ListadoempleadosComponent } from './components/listadoempleados/listadoempleados.component';
import { DetalleempleadosComponent } from './components/detalleempleados/detalleempleados.component';
import { ServiceEmpleados } from './services/empleado.service';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    ComicComponent,
    LibreriaComponent,
    ComicsinyeccionComponent,
    PersonasapiComponent,
    EmpleadosapiComponent,
    EmpleadosoficioComponent,
    ListadoempleadosComponent,
    DetalleempleadosComponent,
  ],
  imports: [
    HttpClientModule, // nota: necesario importarlo para realizar llamadas?
    BrowserModule,
    routing /* nota: importamos routing para rutas */,
    FormsModule /* nota: necesario tenerlo importado para realizar formularios */,
  ],
  providers: [
    appRoutingProviders /* nota: importamos appRoutingProviders para rutas */,
    ComicsService,
    Empleados2Service,
    EmpleadosService,
    ServiceEmpleados,
    PersonasService, // nota: necesario importar los servicios
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
