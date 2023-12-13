import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { Ejercicio1Component } from './components/ejercicio1/ejercicio1.component';
import { Ejercicio2Component } from './components/ejercicio2/ejercicio2.component';
import { ChildComponent } from './components/ejercicio2/child/child.component';

import { AppComponent } from './app.component';

import { SharedModule } from './shared/shared.module';

import { Ejercicio3Component } from './components/ejercicio3/ejercicio3.component';
import { FormsModule } from '@angular/forms';
import { TablaComponent } from './components/ejercicio3/tabla/tabla.component';
import { HttpClientModule } from '@angular/common/http';
import { ListComponent } from './components/ejercicio4/list/list.component';
import { SearchComponent } from './components/ejercicio4/search/search.component';
import { Ejercicio5Component } from './components/ejercicio5/ejercicio5.component';
import { Ejercicio6Component } from './components/ejercicio6/ejercicio6.component';
import { Ejercicio7Component } from './components/ejercicio7/ejercicio7.component';
import { ControlsComponent } from './components/ejercicio5/controls/controls.component';
import { NgChartsModule } from 'ng2-charts';



@NgModule({
  declarations: [
    AppComponent,
    Ejercicio1Component,
    Ejercicio2Component,
    ChildComponent,
    Ejercicio3Component,
    TablaComponent,
    ListComponent,
    SearchComponent,
    Ejercicio5Component,
    Ejercicio6Component,
    Ejercicio7Component,
    ControlsComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    FormsModule,
    HttpClientModule,
    NgChartsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
