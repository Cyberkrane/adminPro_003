import { Component, Input } from '@angular/core';
import { ChartData } from 'chart.js';


@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styleUrls: ['./grafica1.component.css']
})
export class Grafica1Component {

  lables1 : string[] =  [ 'pan', 'gaseosas', 'tacos' ];
  data1: ChartData<'doughnut'> = {
    labels: this.lables1,
    datasets: [
      { data: [ 170, 375, 954 ],
        backgroundColor: [ 'greenyellow', 'green', 'chocolate' ],
        hoverBackgroundColor: [ '#6857E6', '#009FEE', '#F02059' ]
      }
    ]
  };

  lables2 : string[] =  [ 'bizcochuelo', 'cafe', 'galletitas' ];
  data2: ChartData<'doughnut'> = {
    labels: this.lables2,
    datasets: [
      { data: [ 560, 580, 190 ],
        backgroundColor: [ '#B45F04', '#013ADF', '#04B404' ],
        hoverBackgroundColor: [ '#DBA901', '#2E64FE', '#58FA58' ]
      }
    ]
  };
}
