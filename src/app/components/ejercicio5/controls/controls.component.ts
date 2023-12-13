import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { timeInterval } from 'rxjs';

@Component({
  selector: 'controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.css']
})
export class ControlsComponent implements OnInit {

  ngOnInit(): void {
  }

  public active: boolean = false;
  public stateColor: string = '';

  public intervalo: any;


  @Output()
  public stateTraffic: EventEmitter<boolean> = new EventEmitter()

  @Output()
  public selectState: EventEmitter<string> = new EventEmitter();



  activateTraficLight() {

    if ( this.active ) {

      this.stateTraffic.emit( this.active );
      this.stateColor = 'red';
      this.selectState.emit(this.stateColor);
      clearInterval(this.intervalo);

    } else {

      this.stateColor = '';
      this.selectState.emit(this.stateColor)
      clearInterval( this.intervalo );


    }
  }

  changeColor() {
    this.selectState.emit(this.stateColor)
  }



   automatic() {

    if ( this.active) {

      this.active = false;

      this.stateTraffic.emit( this.active );
      this.stateColor = '';
      this.selectState.emit( this.stateColor );
      clearInterval( this.intervalo );

    } else {

      this.active = true;
      this.stateTraffic.emit( this.active );

      if ( this.stateColor === '' ) {

        this.stateColor = 'red';
        this.selectState.emit( this.stateColor );


        this.intervalo = setInterval(() => {

          if ( this.stateColor === 'red' ) {
            this.stateColor = 'yellow';
            this.selectState.emit( this.stateColor );
          }

          else if ( this.stateColor === 'yellow' ) {
            this.stateColor = 'green';
            this.selectState.emit( this.stateColor );
          }

          else if ( this.stateColor === 'green' ) {
            this.stateColor = 'red';
            this.selectState.emit( this.stateColor );
          }

        }, 1500);
      }

    }

  }
}
