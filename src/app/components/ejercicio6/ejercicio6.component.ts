import { ChartData, ChartEvent, ChartType } from 'chart.js';
import { Component, OnInit } from '@angular/core';

import { BaseChartDirective } from 'ng2-charts';
import { ChartConfiguration } from 'chart.js';
import { CovidService } from './services/covid.service';
import { ViewChild } from '@angular/core';
import { map } from 'rxjs';

@Component({
  selector: 'app-ejercicio6',
  templateUrl: './ejercicio6.component.html',
  styleUrls: ['./ejercicio6.component.css'],
})
export class Ejercicio6Component implements OnInit {
  public loading: boolean = true;

  constructor(private service: CovidService) {}

  ngOnInit(): void {
    //Petición de los países
    this.service
      .loadData()
      .pipe(
        map((name) =>
          name.map((country) => this.barChartLabels.push(country.country))
        )
      )
      .subscribe(() => (this.loading = false));

    //Petición de los casos Covid
    this.service
      .loadData()
      .pipe(map((name) => name.map((cases) => cases.casesPerOneMillion)))
      .subscribe((cases) => (this.barChartData.datasets[0].data = cases));
  }

  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  public barChartOptions: ChartConfiguration['options'] = {
    elements: {
      line: {
        tension: 0.4,
      },
    },
    // We use these empty structures as placeholders for dynamic theming.
    scales: {
      x: {},
      y: {
        min: 0,
      },
    },
    plugins: {
      legend: { display: true },
    },
  };

  //Nombres países
  public barChartLabels: string[] = [];

  public barChartType: ChartType = 'bar';

  public barChartData: ChartData<'bar'> = {
    labels: this.barChartLabels,
    datasets: [
      //Barras verticales casos Covid
      { data: [], label: 'Contagios COVID-19 (por millón de población)' },
    ],
  };

  // events
  public chartClicked({
    event,
    active,
  }: {
    event?: ChartEvent;
    active?: object[];
  }): void {
    console.log(event, active);
  }

  public chartHovered({
    event,
    active,
  }: {
    event?: ChartEvent;
    active?: object[];
  }): void {
    console.log(event, active);
  }

  public randomize(): void {
    this.barChartType = this.barChartType === 'bar' ? 'line' : 'bar';
  }

  update() {
    this.loading = true;
    this.service
      .loadData()
      .pipe(map((name) => name.map((cases) => cases.casesPerOneMillion)))
      .subscribe((cases) => {
        this.barChartData.datasets[0].data = cases;
        this.loading = false;
      });
  }
}
