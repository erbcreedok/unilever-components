import {Component, Input, OnInit} from '@angular/core';
import {Task} from '../../../../models/task.model';

@Component({
  selector: 'ui-tasks-data-table',
  templateUrl: './ui-tasks-data-table.component.html',
  styleUrls: ['./ui-tasks-data-table.component.scss']
})
export class UiTasksDataTableComponent implements OnInit {

  @Input() displayedColumns: string[];
  @Input() dataSource: Task[];
  @Input() emptyMessage = 'Таблица пуста';
  @Input() taskType = '';

  constructor() { }

  ngOnInit() {
  }
}
