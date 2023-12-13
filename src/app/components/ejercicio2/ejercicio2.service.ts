import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';



@Injectable({
  providedIn: 'root'
})

export class Ejercicio2Service {

  serviceMessageChild: string = '';

  //Observable de padre a hijo
  observableMessage$ = new Subject<string>();

  //Observable de hijo a padre
  observableMessageFather$ = new Subject<string>();

  serviceMessageFather: string = '';


  constructor() { }







}
