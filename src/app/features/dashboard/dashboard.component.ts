import { Component } from '@angular/core';
import { HeaderDashboardComponent } from './components/header-dashboard/header-dashboard.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [HeaderDashboardComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

}
