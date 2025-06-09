import { Component } from '@angular/core';
import { PieChartComponent } from '../pie-chart/pie-chart.component';

@Component({
  selector: 'app-my-state',
  standalone: true,
  imports: [PieChartComponent],
  templateUrl: './my-state.component.html',
  styleUrl: './my-state.component.scss'
})
export class MyStateComponent {

}
