import { Component, Input } from '@angular/core';
import { University } from '../interfaces/university.interface';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Input()
  public list: University[] = [];


}
