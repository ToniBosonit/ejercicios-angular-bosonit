import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Ejercicio2Service } from '../ejercicio2.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  public buttons: string[] = ['use service', 'use output event', 'use observable'];

  public obsMessage: string = '';


  constructor( private service: Ejercicio2Service ){}


  ngOnInit(): void {
    this.service.observableMessage$.subscribe( resp => this.obsMessage = resp );
  }


  @Input()
  public message: string = '';


  get serviceMessageChild(){
    return this.service.serviceMessageChild;
  }

  emitMessageFather():void {
    this.outputMessageFather.emit('');
    this.service.observableMessageFather$.next('');
    this.service.serviceMessageFather = 'child using service';
  }

  @Output()
  public outputMessageFather: EventEmitter<string> = new EventEmitter();

  emitOutputFather(){
    this.service.serviceMessageFather = '';
    this.service.observableMessageFather$.next('');
    this.outputMessageFather.emit('child using output event');
  }

  obsMessageFather(){
    this.outputMessageFather.emit('');
    this.service.serviceMessageFather = '';
    this.service.observableMessageFather$.next('child using subject');
  }











}




