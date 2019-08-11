import { Component } from '@angular/core';
import { Persona } from './structure/persona-model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ejemplo1';
  public nombre: string ="Julio";

  public datos: Array<Persona> = [];

//<app-root></app-root>

  public cambiarNombre() {
    this.nombre="Juan";
  }

}
