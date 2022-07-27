import { Component, Input } from '@angular/core';
import { ChartData} from 'chart.js';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [
  ]
})
export class DonaComponent {
  
  @Input() title: string = 'untitled'

  @Input('Labels1') doughnutChartLabels: string[] = [ 'labels1', 'labels2', 'labels3' ];
  @Input('data') doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      { data: [ 350, 450, 100 ] }
      
    ]
  };
}
