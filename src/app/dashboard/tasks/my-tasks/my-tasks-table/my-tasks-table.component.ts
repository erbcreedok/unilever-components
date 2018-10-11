import {Component, Input, OnDestroy, OnInit, SimpleChanges} from '@angular/core';
import { Task } from '../../../../models/task.model';
import {Subscription} from 'rxjs/index';
import {TasksService} from '../../../../providers/tasks.service';
import {
  STATUSES,
  TYPES
} from '../../task-types.constants';
import {ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-my-tasks-table',
  templateUrl: './my-tasks-table.component.html',
  styleUrls: ['./my-tasks-table.component.scss']
})
export class MyTasksTableComponent implements OnInit, OnDestroy {

  badRoute = false;
  typeName = TYPES[0].label;
  type = TYPES[0].path;
  status = STATUSES[0].path;
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

  constructor(private tasksService: TasksService,
              private route:  ActivatedRoute) { }

  ngOnInit() {
    this.subscriptions = [
      this.tasksService.tasksChanged.subscribe(
        (tasks: Task[]) => {
          this.tasks = tasks;
        }
      ),
      this.route.params.subscribe((params: {type: string, status: string}) => {
        this.type = params.type;
        this.status = params.status;
        this.typeName = '';
        const typeIndex = TYPES.findIndex(i => i.path === this.type);
        const statusIndex = STATUSES.findIndex(i => i.path === this.status);
        this.badRoute = (typeIndex === -1) ||
                        (statusIndex === -1);
        if (!this.badRoute) {
          this.typeName = TYPES[typeIndex].label;
          this.tasksService.fetchTasks(this.type, this.status);
        }
      })
    ];
  }

  ngOnDestroy() {
    this.subscriptions.forEach(s => s.unsubscribe());
  }

  isLoading(): boolean {
      return this.tasksService.requestStatus === 'loading';
  }
}
