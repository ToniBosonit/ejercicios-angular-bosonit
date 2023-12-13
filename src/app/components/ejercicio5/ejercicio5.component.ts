import { Component } from '@angular/core';

@Component({
  selector: 'app-ejercicio5',
  templateUrl: './ejercicio5.component.html',
  styleUrls: ['./ejercicio5.component.css']
})
export class Ejercicio5Component {



  public onOff: boolean = false;
  public colorTraficLight: string = '';



  receiveOnOff( valor: boolean ):void {
    this.onOff = valor;
  }

  receiveColor( color: string ):void {
    this.colorTraficLight = color;
  }


}
