import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Paises } from './paises.interface';


@Injectable({
  providedIn: 'root'
})
export class Ejercicio3Service {

  constructor( private http: HttpClient ) { }


  loadCountries(){

    const url: string = 'https://restcountries.com/v3.1/all';

    return this.http.get<Paises[]>( url );
  }



}
