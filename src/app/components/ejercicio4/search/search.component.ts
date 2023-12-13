import { Component, OnInit } from '@angular/core';
import { UniversitiesService } from '../universities.service';
import { University } from '../interfaces/university.interface';
import { Subject, debounceTime, tap, fromEvent, map, take, distinctUntilChanged, switchMap, pipe } from 'rxjs';





@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})



export class SearchComponent {

  public results: University[] = [];
  public country: string = '';

  public debouncer: Subject<string> = new Subject<string>();



  constructor( private serviceUniv: UniversitiesService ){

  }







  searchUniversity( value: string ) {

    //Si no hay un país seleccionado o el input está vacío no muestra resultados
    if( this.country === '' || value === ''){
      this.results = [];
      return;
    }

    this.serviceUniv.loadUniversities( this.country , value ).pipe(

    ).subscribe( resp => this.results = resp )

  }



  //Setea el valor de la variable con el valor que viene del botón
  valueCountry( country: string ){
    this.country = country;
    console.log('País seleccionado en los botones =>', this.country );
  }


}

