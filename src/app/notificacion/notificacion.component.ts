import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-notificacion',
  templateUrl: './notificacion.component.html',
  styleUrls: ['./notificacion.component.css']
})
export class NotificacionComponent implements OnInit {

  @Input()
  public isDanger: boolean = false;
  
  @Input()
  public isWarning: boolean = false;
  @Input()
  public isSuccess: boolean = true;
  @Input()
  public titulo: string = "Exito!";

  constructor() {


  }

  ngOnInit() {
  }

}
