import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';



@NgModule({
  declarations: [
    MenuComponent
  ],
  imports: [
    CommonModule,
    ButtonModule,
    MenubarModule
  ],
  exports: [
    MenuComponent
  ]
})
export class SharedModule { }
