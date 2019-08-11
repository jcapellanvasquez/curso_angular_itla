import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { Persona } from './structure/persona-model';
import { FormularioConEventoComponent } from './formulario-con-evento/formulario-con-evento.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'ejemplo1';
  public nombre: string ="Julio";

  @ViewChild("form", {static: false})
  public form: FormularioConEventoComponent; 

  public datos: Array<Persona> = [];

//<app-root></app-root>

  constructor() {
  }

  ngAfterViewInit() {
    // this.form.ver();
  }

  ngOnInit() {
    
  }


  public cambiarNombre() {
    this.nombre="Juan";
  }

  public save(persona: Persona) {
    console.log(persona)

    this.datos.push(persona)
  }

}
