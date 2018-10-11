import {Component, Input, OnInit} from '@angular/core';
import {Task} from '../../../models/task.model';

@Component({
  selector: 'app-calendar-tasks',
  templateUrl: './calendar-tasks.component.html',
  styleUrls: ['./calendar-tasks.component.scss']
})
export class CalendarTasksComponent implements OnInit {

  @Input() tasks: Task[];

  constructor() { }

  ngOnInit() {
  }

}
