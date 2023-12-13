import { Component, OnInit, numberAttribute } from '@angular/core';
import { Person } from './tabla/persons.interface';
import { Ejercicio3Service } from './ejercicio3.service';
import { Paises } from './paises.interface';
import { map } from 'rxjs';


@Component({
  selector: 'app-ejercicio3',
  templateUrl: './ejercicio3.component.html',
  styleUrls: ['./ejercicio3.component.css']
})

export class Ejercicio3Component implements OnInit {

  constructor( private service: Ejercicio3Service ) { }

  public paises: Paises[] = [];

  ngOnInit(): void {
    this.service.loadCountries().pipe(
      map(data => this.paises = data),
      map(() => this.paises.sort((a, b) => (a.name.common > b.name.common) ? 1 : -1))
    ).subscribe();
  }


  public persons: Person =
    {
      user: '',
      email: '',
      password: '',
      confirm: '',
      suscriber: false,
      country: '',
      city: ''
    }

  public personsFormFather: Person[] = [];

  savePerson(person: Person): void {

    //Validaciones
    if (person.user === '' || person.password === '' || person.email === '' || person.country === '' || person.city === '') {
      alert('Rellene todos los campos')
    } else if ( person.password !== person.confirm ) {
      alert('Las contraseñas no coinciden')
    } else {

      const personExist = this.personsFormFather.findIndex((findPerson) => findPerson.email === person.email)

      personExist !== -1 ? this.personsFormFather[personExist] = { ...person } : this.personsFormFather.push({...person});

      this.cleanForm();
    }
  }

  //Recibe el index de la tabla y carga el formulario
  receiveIndexChild(index: number) {
    const obj = this.personsFormFather[index];

    console.log(obj)
    this.persons = { ...obj };
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
  }


}
