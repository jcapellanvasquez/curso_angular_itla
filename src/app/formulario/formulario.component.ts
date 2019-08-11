import { Component, OnInit, Input } from '@angular/core';
import { Persona } from '../structure/persona-model';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  public nombre: string = "";
  public apellido: string = "";
  public direccion: string ="";

  @Input() datos: Array<Persona> = [];
  constructor() { }

  ngOnInit() {
  }

  public add() {
    this.datos.push({
      nombre: this.nombre,
      apellido: this.apellido,
      direccion: this.direccion
    })
  }

}
