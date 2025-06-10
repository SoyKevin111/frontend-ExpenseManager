import { Component, inject, NgModule, PLATFORM_ID } from '@angular/core';
import { NgxEchartsModule } from 'ngx-echarts';
import { EChartsOption } from 'echarts';
import { CommonModule, isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-pie-chart',
  standalone: true,
  imports: [NgxEchartsModule, CommonModule],
  templateUrl: './pie-chart.component.html',
  styleUrl: './pie-chart.component.scss'
})
export class PieChartComponent {

  readonly isBrowser = isPlatformBrowser(inject(PLATFORM_ID));

  pieChartOption: EChartsOption = {
    tooltip: {
      trigger: 'item'
    },
    legend: {
      top: 'center',
      left: '10%',
      orient: 'vertical',
      icon: 'rect',
      itemWidth: 15,
      itemHeight: 15,
      textStyle: {
        fontSize: 10      // tamaño del texto
      }
    },
    series: [
      {
        color: ['#22C55E', '#EF4444', '#2196f3', '#FACC15'], // Colores para cada sección,
        name: 'Total',
        type: 'pie',
        radius: '70%',
        center: ['65%', '47%'],
        data: [
          { value: 1048, name: 'Ingresos', },
          { value: 735, name: 'Gastos' },
          { value: 580, name: 'Ahorros' },
          { value: 484, name: 'Gastos Ahorros' }
        ],
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        },
        animation: true // animación activada (por defecto)
      }
    ]
  };


}
