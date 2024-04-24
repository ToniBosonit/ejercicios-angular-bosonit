import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Person } from './persons.interface';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css'],
})
export class TablaComponent {
  //Envía el index del registro a editar
  @Output()
  public editMode = new EventEmitter<boolean>();

  //Recibe el array de personas del padre(formulario)
  @Input()
  public personsFormChild: Person[] = [];

  //Envía el index del registro a editar
  @Output()
  public indexToEdit = new EventEmitter<number>();

  //Borrar un registro
  deletePerson(person: Person) {
    const indexPerson = this.personsFormChild.indexOf(person);
    this.personsFormChild.splice(indexPerson, 1);
    confirm(`¿Quieres borrar al usuario ${person.user}?`);
  }

  //Editar un registro
  editPerson(person: Person) {
    const indexPerson = this.personsFormChild.indexOf(person);
    this.indexToEdit.emit(indexPerson);
    this.editMode.emit(true);
  }
}
