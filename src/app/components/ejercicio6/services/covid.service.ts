import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { Covid } from '../interfaces/covid.interface';

@Injectable({
  providedIn: 'root'
})
export class CovidService {

  constructor( private http: HttpClient) { }

  loadData(): Observable <Covid[]> {
    const url: string = 'https://disease.sh/v3/covid-19/countries';
      return this.http.get<Covid[]>( url ).pipe(
    );
  }

}
