import { Component } from '@angular/core';

@Component({
  selector: 'app-ejercicio1',
  templateUrl: './ejercicio1.component.html',
  styleUrls: ['./ejercicio1.component.css']
})
export class Ejercicio1Component {

  public showHideImage: boolean = false;
  public textState: string = 'Mostrar';


  showHide():void{

    if( this.showHideImage === false || this.textState === 'Mostar'){

      this.showHideImage = true;
      this.textState = 'Ocultar'

    } else {

      this.showHideImage = false;
      this.textState = 'Mostrar'
    }

  }

}
