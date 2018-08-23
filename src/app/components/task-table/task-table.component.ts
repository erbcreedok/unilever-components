import {Component, Input, OnInit, TemplateRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-task-table',
  templateUrl: './task-table.component.html',
  styleUrls: ['./task-table.component.scss']
})
export class TaskTableComponent implements OnInit {

  @ViewChild('typeTemplate') typeTemplate: TemplateRef<any>;
  @ViewChild('statusTemplate') statusTemplate: TemplateRef<any>;
  @ViewChild('actionTemplate') actionTemplate: TemplateRef<any>;

  @Input() loading = false;
  @Input() rows = [];
  @Input() columns = [];

  constructor() {
  }

  ngOnInit() {
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
  }

}
