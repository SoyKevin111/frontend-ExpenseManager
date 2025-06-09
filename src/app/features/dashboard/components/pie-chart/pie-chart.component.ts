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
        name: 'Accesos',
        type: 'pie',
        radius: '70%',
        center: ['65%', '47%'],
        data: [
          { value: 1048, name: 'Directo' },
          { value: 735, name: 'Email' },
          { value: 580, name: 'Publicidad' },
          { value: 484, name: 'Búsqueda' },
          { value: 300, name: 'Redes Sociales' }
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
