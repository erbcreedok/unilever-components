import { Component, OnInit } from '@angular/core';
import {GREEN_RGB, RED_RGB, YELLOW_RGB} from '../../../shared/CONSTANTS';

@Component({
  selector: 'app-employee-tasks',
  templateUrl: './employee-tasks.component.html',
  styleUrls: ['./employee-tasks.component.scss']
})
export class EmployeeTasksComponent implements OnInit {

  data = {
    legend: [
      {label: 'Выполнил сразу', backgroundColor: `rgba(${GREEN_RGB})`},
      {label: 'Выполнил через проверку', backgroundColor: `rgba(${YELLOW_RGB})`},
      {label: 'Не выполнил', backgroundColor: `rgba(${RED_RGB})`}
    ],
    efficiencies: [
      {label: 'Проверка промоактивностей', percentage: 60},
      {label: 'Проверка долей', percentage: 78},
      {label: 'Сбор цен на товары', percentage: 60},
      {label: 'Проверка промоактивностей', percentage: 100}
    ]
  }

  constructor() { }

  ngOnInit() {
  }

}
