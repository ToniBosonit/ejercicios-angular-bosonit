import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {
  Subject,
  debounceTime,
  distinctUntilChanged,
  fromEvent,
  map,
  pipe,
  switchMap,
  take,
  tap,
} from 'rxjs';

import { UniversitiesService } from '../universities.service';
import { University } from '../interfaces/university.interface';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent {
  public results: University[] = [];
  public country: string = '';

  public debouncer: Subject<string> = new Subject<string>();

  @ViewChild('text')
  public inputTex!: ElementRef;

  constructor(private serviceUniv: UniversitiesService) {}

  searchUniversity(value: string) {
    //Si no hay un país seleccionado o el input está vacío no muestra resultados
    if (this.country === '' || value === '') {
      this.results = [];
      return;
    }

    this.serviceUniv
      .loadUniversities(this.country, value)
      .subscribe((resp) => (this.results = resp));
  }

  //Setea el valor de la variable con el valor que viene del botón
  valueCountry(country: string) {
    this.country = country;
    this.results = [];
    this.inputTex.nativeElement.value = '';
  }
}
