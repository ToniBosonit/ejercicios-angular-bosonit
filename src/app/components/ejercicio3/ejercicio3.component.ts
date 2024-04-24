import { Component, OnInit, numberAttribute } from '@angular/core';

import { Ejercicio3Service } from './ejercicio3.service';
import { Paises } from './paises.interface';
import { Person } from './tabla/persons.interface';
import { map } from 'rxjs';

@Component({
  selector: 'app-ejercicio3',
  templateUrl: './ejercicio3.component.html',
  styleUrls: ['./ejercicio3.component.css'],
})
export class Ejercicio3Component implements OnInit {
  public editMode: boolean = false;
  public error: boolean = false;
  public passwordError: boolean = false;

  constructor(private service: Ejercicio3Service) {}

  public paises: Paises[] = [];

  ngOnInit(): void {
    this.loadCountries();
  }

  public persons: Person = {
    user: '',
    email: '',
    password: '',
    confirm: '',
    suscriber: false,
    country: '',
    city: '',
  };

  loadCountries() {
    this.service
      .loadCountries()
      .pipe(
        map((data) => (this.paises = data)),
        map(() =>
          this.paises.sort((a, b) => (a.name.common > b.name.common ? 1 : -1))
        )
      )
      .subscribe();
  }

  public personsFormFather: Person[] = [];

  savePerson(person: Person): void {
    //Validaciones
    if (
      person.user === '' ||
      person.password === '' ||
      person.confirm === '' ||
      person.email === '' ||
      person.country === '' ||
      person.city === ''
    ) {
      this.error = true;
      setTimeout(() => {
        this.error = false;
      }, 2000);
    } else if (person.password !== person.confirm) {
      this.passwordError = true;
      setTimeout(() => {
        this.passwordError = false;
      }, 2000);
    } else {
      const personExist = this.personsFormFather.findIndex(
        (findPerson) => findPerson.email === person.email
      );

      personExist !== -1
        ? (this.personsFormFather[personExist] = { ...person })
        : this.personsFormFather.push({ ...person });

      this.cleanForm();
    }

    this.editMode = false;
  }

  //Recibe el index de la tabla y carga el formulario
  receiveIndexChild(index: number) {
    const obj = this.personsFormFather[index];

    this.persons = { ...obj };
  }

  receiveEditMode(editMode: boolean): void {
    this.editMode = editMode;
  }

  //Borra todo el formulario
  cleanForm() {
    this.persons.user = '';
    this.persons.email = '';
    this.persons.password = '';
    this.persons.confirm = '';
    this.persons.suscriber = false;
    this.persons.country = '';
    this.persons.city = '';

    this.editMode = false;
  }
}
