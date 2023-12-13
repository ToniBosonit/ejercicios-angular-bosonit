import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { Action } from 'rxjs/internal/scheduler/Action';

@Component({
  selector: 'shared-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  public itemsMenu: string[] = ['ejercicio1','ejercicio2','ejercicio3','ejercicio4','ejercicio5','ejercicio6','ejercicio7']

  constructor(private router: Router) { }

  items: MenuItem[] | undefined;

    ngOnInit() {
        this.items = [
            {
                label: 'Ejercio 1',
                icon: 'pi pi-fw pi-pencil',
                routerLink: 'ejercicio1',

            },
            {
                label: 'Ejercicio 2',
                icon: 'pi pi-fw pi-pencil',
                routerLink: 'ejercicio2'
            },
            {
                label: 'Ejercicio 3',
                icon: 'pi pi-fw pi-pencil',
                routerLink: 'ejercicio3'
            },
            {
                label: 'Ejercicio 4',
                icon: 'pi pi-fw pi-pencil',
                routerLink: 'ejercicio4'
            },
            {
                label: 'Ejercicio 5',
                icon: 'pi pi-fw pi-pencil',
                routerLink: 'ejercicio5'
            },
            {
                label: 'Ejercicio 6',
                icon: 'pi pi-fw pi-pencil',
                routerLink: 'ejercicio6'
            },
            {
                label: 'Ejercicio 7',
                icon: 'pi pi-fw pi-pencil',
                routerLink: 'ejercicio7'

            }
        ];
    }

  navegar(ruta: string): void {
    this.router.navigate([ruta]);
  }

}
