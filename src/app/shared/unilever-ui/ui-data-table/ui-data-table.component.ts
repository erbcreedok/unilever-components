import {Component, Input, OnInit} from '@angular/core';
import {Task} from '../../../models/task.model';

@Component({
  selector: 'ui-data-table',
  templateUrl: './ui-data-table.component.html',
  styleUrls: ['./ui-data-table.component.scss']
})
export class UiDataTableComponent implements OnInit {

  @Input() displayedColumns: string[];
  @Input() dataSource: any[];
  @Input() emptyMessage = 'Таблица пуста';
  @Input() taskType = '';

  constructor() { }

  ngOnInit() {
  }
}
