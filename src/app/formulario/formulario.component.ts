import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  public nombre: string = "";
  public apellido: string = "";
  public direccion: string ="";
  constructor() { }

  ngOnInit() {
  }

}
