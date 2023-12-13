import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Ejercicio1Component } from './components/ejercicio1/ejercicio1.component';
import { Ejercicio2Component } from './components/ejercicio2/ejercicio2.component';
import { Ejercicio3Component } from './components/ejercicio3/ejercicio3.component';
import { SearchComponent } from './components/ejercicio4/search/search.component';
import { Ejercicio5Component } from './components/ejercicio5/ejercicio5.component';
import { Ejercicio6Component } from './components/ejercicio6/ejercicio6.component';
import { Ejercicio7Component } from './components/ejercicio7/ejercicio7.component';


const routes: Routes = [
  {
    path: 'ejercicio1',
    component: Ejercicio1Component,
  },
  {
    path: 'ejercicio2',
    component: Ejercicio2Component,
  },
  {
    path: 'ejercicio3',
    component: Ejercicio3Component,
  },
  {
    path: 'ejercicio4',
    component: SearchComponent,//ejercicio4 le puse searchComponent
  },
  {
    path: 'ejercicio5',
    component: Ejercicio5Component,
  },
  {
    path: 'ejercicio6',
    component: Ejercicio6Component,
  },
  {
    path: 'ejercicio7',
    component: Ejercicio7Component,
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
