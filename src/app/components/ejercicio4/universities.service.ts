import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { University } from './interfaces/university.interface';
import { Observable, debounceTime, delay, fromEvent } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UniversitiesService {

  constructor( private http: HttpClient ) { }


  loadUniversities( country: string, university: string ): Observable<University[]>{

    const url: string = `http://universities.hipolabs.com/search?name=${ university }&country=${ country }`

    return this.http.get<University[]>( url ).pipe(
      delay(1000)
    );
  }


}
