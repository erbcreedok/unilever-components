import {AfterContentInit, Component, OnInit} from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit, AfterContentInit {

  loading = false;
  rows = [];
  constructor() { }

  ngOnInit() {}

  ngAfterContentInit() {
    this.loading = true;
    setTimeout( () => {
      this.rows = [
        {
          type: 'Свободный тип задач',
          city: 'Алматы',
          door: 'Магнум 1',
          created_date: moment().format('D MMM YYYY'),
          expire_date: moment().format('D MMM YYYY'),
          status: 1,
          checking: 'Айдос Курмашев',
          id: '1'
        },
        {
          type: 'Сбор цен на товары',
          city: 'Алматы',
          door: 'Магнум 2',
          created_date: moment().format('D MMM YYYY'),
          expire_date: moment().format('D MMM YYYY'),
          status: 0,
          checking: 'Мадина Умирбекова',
          id: '1'
        },
        {
          type: 'Свободный тип задач',
          city: 'Южно-Казахстанская область',
          door: 'Магнум 1',
          created_date: moment().format('D MMM YYYY'),
          expire_date: moment().format('D MMM YYYY'),
          status: 2,
          checking: 'Айдос Курмашев',
          id: '1'
        },
        {
          type: 'Свободный тип задач',
          city: 'Караганды',
          door: 'Магнум 1',
          created_date: moment().format('D MMM YYYY'),
          expire_date: moment().format('D MMM YYYY'),
          status: 1,
          checking: 'Айдос Курмашев',
          id: '1'
        },
        {
          type: 'Свободный тип задач',
          city: 'Алматы',
          door: 'Магнум 1',
          created_date: moment().format('D MMM YYYY'),
          expire_date: moment().format('D MMM YYYY'),
          status: 4,
          checking: 'Айдос Курмашев',
          id: '1'
        },
      ];
      this.loading = false;
    }, 1500);
  }

}
