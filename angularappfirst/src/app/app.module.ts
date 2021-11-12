import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// nota: importamos la dependencia de FormsModule
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FirstComponent } from 'src/components/firstcomponent/firstcomponent.component';
import { HooksAngular } from 'src/components/hooksangular/hooksangular.component';
import { Deportes } from 'src/components/deportes/deportes.component';
import { FormularioBindingModel } from 'src/components/formulariobindingmodel/formulariobindingmodel.component';
import { FormularioReferencia } from 'src/components/formularioreferencia/formularioreferencia.component';
import { Multiplicar } from 'src/components/multiplicar/multiplicar.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    HooksAngular,
    Deportes,
    FormularioBindingModel,
    FormularioReferencia,
    Multiplicar,
  ],
  // nota: importamos FormsModule
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
