import { Component } from '@angular/core';
import { HeaderDashboardComponent } from './components/header-dashboard/header-dashboard.component';
import { TotalIncomeComponent } from './components/total-income/total-income.component';
import { TotalSavingsComponent } from './components/total-savings/total-savings.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [HeaderDashboardComponent, TotalIncomeComponent, TotalSavingsComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

}
