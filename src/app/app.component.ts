import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ejemplo1';
  public nombre: string ="Julio";

//<app-root></app-root>

  public cambiarNombre() {
    this.nombre="Juan";
  }

}
