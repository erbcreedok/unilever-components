import { Component, OnInit } from '@angular/core';
import {GREEN_RGB, RED_RGB, YELLOW_RGB} from '../../shared/CONSTANTS';

@Component({
  selector: 'app-promoactivities-bar-chart',
  templateUrl: './promoactivities-bar-chart.component.html',
  styleUrls: ['./promoactivities-bar-chart.component.scss']
})
export class PromoactivitiesBarChartComponent implements OnInit {

  data = {
    labels: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
    datasets: [
      {
        label: 'Выполнил сразу',
        data: [65, 59, 80, 81, 56, 55, 40],
        backgroundColor: `rgba(${GREEN_RGB}, 0.9)`,
      },
      {
        label: 'Выполнил через проверку',
        data: [56, 55, 40, 65, 59, 80, 81],
        backgroundColor: `rgba(${YELLOW_RGB}, 0.9)`,
      },
      {
        label: 'Не выполнил',
        data: [65, 59, 80, 56, 55, 40, 81],
        backgroundColor: `rgba(${RED_RGB}, 0.9)`,
      },
    ],
  };

  options = {
    tooltip: {

    },
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }],
      xAxes: [{
        gridLines: {
          display: false
        },
        barPercentage: 1.0,
        categoryPercentage: .75
      }]
    }
  };

  legend = {
    display: false
  };

  constructor() { }

  ngOnInit() {
  }

}
