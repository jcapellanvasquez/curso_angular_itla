import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appNotificacion]'
})
export class NotificacionDirective {

  @Input('appNotificacion') color: string;


  constructor(el: ElementRef) {
    el.nativeElement.style.backgroundColor = 'yellow';
 }

}
