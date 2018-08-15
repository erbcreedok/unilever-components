import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-task-table',
  templateUrl: './task-table.component.html',
  styleUrls: ['./task-table.component.scss']
})
export class TaskTableComponent implements OnInit {

  @ViewChild('typeTemplate') typeTemplate: TemplateRef<any>;
  @ViewChild('statusTemplate') statusTemplate: TemplateRef<any>;
  @ViewChild('actionTemplate') actionTemplate: TemplateRef<any>;
  loading = false;

  rows = [];
  columns = [];

  constructor() {
  }

  ngOnInit() {
    console.log(this.actionTemplate);
    this.loading = true;
    this.columns = [
      { name: 'Тип задачи', prop: 'type', width: 200, cellClass: 'font-weight-500 color-headings' },
      { name: 'Город', prop: 'city',  flexGrow: 2, width: 100 },
      { name: 'Торговая точка', prop: 'door', flexGrow: 1, minWidth: 125 },
      { name: 'Дата создания', prop: 'created_date', flexGrow: 2 },
      { name: 'Крайний срок', prop: 'expire_date', flexGrow: 2 },
      { name: 'Статус', prop: 'status', cellTemplate: this.statusTemplate, flexGrow: 1, width: 110 },
      { name: 'Проверяющий', prop: 'checking', flexGrow: 2 },
      { name: '', cellTemplate: this.actionTemplate, width: 60, frozenRight: true, flexGrow: 1, cellClass: 'action-cell' }
    ];
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
