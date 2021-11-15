import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routing, appRoutingProviders } from './app.routing'; // nota: importamos las siguientes dependencias para poder utilizar las rutas

import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { HomeComponent } from './components/home/home.component';
import { ComicComponent } from './components/comic/comic.component';
import { LibreriaComponent } from './components/libreria/libreria.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    ComicComponent,
    LibreriaComponent,
  ],
  imports: [
    BrowserModule,
    routing /* nota: importamos routing para rutas */,
    FormsModule /* nota: necesario tenerlo importado para realizar formularios */,
  ],
  providers: [
    appRoutingProviders /* nota: importamos appRoutingProviders para rutas */,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
