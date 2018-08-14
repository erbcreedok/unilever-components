import { Component, OnInit } from '@angular/core';
import {GREEN_RGB, RED_RGB, YELLOW_RGB} from '../../shared/CONSTANTS';

@Component({
  selector: 'app-promoactivities-donut-chart',
  templateUrl: './promoactivities-donut-chart.component.html',
  styleUrls: ['./promoactivities-donut-chart.component.scss']
})
export class PromoactivitiesDonutChartComponent implements OnInit {

  legend = [
    {label: 'Выполнил сразу (16)', backgroundColor: `rgba(${GREEN_RGB})`},
    {label: 'Выполнил через проверку (82)', backgroundColor: `rgba(${YELLOW_RGB})`},
    {label: 'Не выполнил (13)', backgroundColor: `rgba(${RED_RGB})`}
  ];

  data = {
    labels: ['Выполнил сразу', 'Выполнил через проверку', 'Не выполнил'],
    datasets: [
      {
        data: [16, 82, 13],
        backgroundColor: [
            `rgba(${GREEN_RGB})`,
            `rgba(${YELLOW_RGB})`,
            `rgba(${RED_RGB})`
        ]
      }
    ]
  }

  constructor() { }

  ngOnInit() {
  }

}
