import { Observable, delay, observable } from 'rxjs';

import { Covid } from '../interfaces/covid.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CovidService {
  constructor(private http: HttpClient) {}

  loadData(): Observable<Covid[]> {
    const url: string = 'https://disease.sh/v3/covid-19/countries';
    return this.http.get<Covid[]>(url).pipe(delay(1000));
  }
}
