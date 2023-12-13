import { Component, OnInit } from '@angular/core';
import { Ejercicio2Service } from './ejercicio2.service';



@Component({
  selector: 'app-ejercicio2',
  templateUrl: './ejercicio2.component.html',
  styleUrls: ['./ejercicio2.component.css']
})
export class Ejercicio2Component implements OnInit {

  public buttons: string[] = ['use service','use input property','use observable'];

  public inputMessageChild: string = '';
  public outPutMessageFather: string = '';
  public obsMessageFather: string = '';



  constructor( private service: Ejercicio2Service ){}

  ngOnInit(): void {
    this.service.observableMessageFather$.subscribe( resp => this.obsMessageFather = resp );
  }


  serviceMessage(){
    this.inputMessageChild = '';
    this.service.observableMessage$.next('');
    this.service.serviceMessageChild = 'parent using service';
  }

  emitInputChildMessage():void {
    this.service.serviceMessageChild = '';
    this.service.observableMessage$.next('');
    this.inputMessageChild = 'parent using input property';
  }

  obsMessage(){
    this.service.serviceMessageChild = '';
    this.inputMessageChild = '';
    this.service.observableMessage$.next('parent using subject');
  }

  get serviceMessageFather(){
    return this.service.serviceMessageFather;
  }

  emitMessageFather( val: string){
    this.outPutMessageFather = val;
  }













}
