import { Component } from '@angular/core';
import { HeaderDashboardComponent } from './components/header-dashboard/header-dashboard.component';
import { TotalIncomeComponent } from './components/total-income/total-income.component';
import { TotalSavingsComponent } from './components/total-savings/total-savings.component';
import { MyStateComponent } from './components/my-state/my-state.component';
import { CardTransactionComponent } from '../transaction/card-transaction/card-transaction.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [HeaderDashboardComponent, TotalIncomeComponent, TotalSavingsComponent, MyStateComponent, CardTransactionComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

}
