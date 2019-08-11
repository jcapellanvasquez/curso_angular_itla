import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Persona } from '../structure/persona-model';

@Component({
  selector: 'app-formulario-con-evento',
  templateUrl: './formulario-con-evento.component.html',
  styleUrls: ['./formulario-con-evento.component.css']
})
export class FormularioConEventoComponent implements OnInit {

  public nombre: string = "";
  public apellido: string = "";
  public direccion: string ="";

  constructor() {}

  @Output() 
  public onSave: EventEmitter<Persona> = new EventEmitter<Persona>();

  ngOnInit() {
  }

  public add() {
    this.onSave.emit({
      nombre: this.nombre,
      apellido: this.apellido,
      direccion: this.direccion
    })
  }

  public ver() {
    alert("Exito");
  }

}
