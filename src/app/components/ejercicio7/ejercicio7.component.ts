import { Component, OnInit } from '@angular/core';
import { interval, pipe, timer, debounceTime, Subject, Observable, range, of, map, Subscription, take } from 'rxjs';
import { SuperClass } from '../../../../../Proyectos-Angular/01-typescript-intro/src/topics/10-decorators';
import { valueOrDefault } from 'chart.js/dist/helpers/helpers.core';

@Component({
  selector: 'app-ejercicio7',
  templateUrl: './ejercicio7.component.html',
  styleUrls: ['./ejercicio7.component.css']
})
export class Ejercicio7Component {

  public miCount = {
    onCount: false,
    countUp: true,
    value: 0,
    speed: 1000,
    step: 1
  }

  public miInterval$ = interval(this.miCount.speed);
  public suscription: Subscription | undefined;
  public count: number = 0;

  //Actualiza el valor del contador en base al set To
  setTo() {
    this.count = this.miCount.value;
  }


  //Iniciar contador
  startCount() {
    if (this.miCount.onCount) return;
    this.miCount.onCount = true;
    this.suscription = this.miInterval$.pipe(
      map(() => this.count += this.miCount.step)
    ).subscribe()
  }

  //Pausar contador
  pauseCount() {
    this.miCount.onCount = false;
    this.suscription?.unsubscribe()
  }

  //Resetear contador
  resetCount() {
    this.miCount.onCount = false;
    this.suscription?.unsubscribe()
    this.miInterval$.pipe(
      map(() => this.count = 0),
      take(1)
    ).subscribe()
    this.suscription?.unsubscribe()
  }

  //Contar hacia delante
  countUp() {
    if (this.miCount.onCount) {
      this.miCount.countUp = true;
      this.suscription?.unsubscribe();
      this.suscription = this.miInterval$.pipe(
        map(() => this.count += this.miCount.step)
      ).subscribe()
    }
  }

  /**
   * number:
   * Contar hacia atrás
   */
  countDown() {
    if (this.miCount.onCount) {
      this.miCount.countUp = false;
      this.miCount.onCount = true;
      this.suscription?.unsubscribe()
      this.suscription = this.miInterval$.pipe(
        map(() => this.count -= this.miCount.step)
      ).subscribe()
    }
  }

}



