import {Component, OnDestroy, OnInit} from '@angular/core';
import { Task } from '../../../../models/task.model';
import {Subscription} from 'rxjs/index';
import {TasksService} from '../../../../providers/tasks.service';
@Component({
  selector: 'app-my-tasks-table',
  templateUrl: './my-tasks-table.component.html',
  styleUrls: ['./my-tasks-table.component.scss']
})
export class MyTasksTableComponent implements OnInit, OnDestroy {

  displayedColumns = [
      'city',
      'door',
      'startDate',
      'endDate',
      'checking',
      'action'
  ];

  subscriptions: Subscription[] = [];
  public tasks: Task[];

  constructor(private tasksService: TasksService) { }

  ngOnInit() {
    this.subscriptions = [
      this.tasksService.tasksChanged.subscribe(
        (tasks: Task[]) => {
          this.tasks = tasks;
          console.log(tasks);
        }
      )
    ];
    this.tasksService.fetchTasks();
  }

  ngOnDestroy() {
    this.subscriptions.forEach(s => s.unsubscribe());
  }

  isLoading(): boolean {
      return this.tasksService.requestStatus === 'loading';
  }

}
