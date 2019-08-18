import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormularioComponent } from './formulario/formulario.component';
import { ListaComponent } from './lista/lista.component';
import { FormularioConEventoComponent } from './formulario-con-evento/formulario-con-evento.component';
import { NotificacionComponent } from './notificacion/notificacion.component';
import { CustomPipe } from './custom.pipe';
import { NotificacionDirective } from './notificacion.directive';

@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent,
    ListaComponent,
    FormularioConEventoComponent,
    NotificacionComponent,
    CustomPipe,
    NotificacionDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
