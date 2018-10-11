import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Subscription} from 'rxjs/index';
import {ElNotificationService} from 'element-angular/release/notification/notification.service';
import { Task } from '../../../models/task.model';
import {TaskService} from '../../../providers/task.service';
import {TYPE_PRICE_TRACKING, TYPE_PROMO, TYPE_SHELF_SHARE, TYPES} from '../task-types.constants';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit, OnDestroy {

  taskId: number;
  taskType = TYPES[0].path;
  taskTypeDisplay = TYPES[0].label;
  task: Task;
  subscriptions: Subscription[] = [];
  displayedColumns = {
    [TYPE_PRICE_TRACKING]: [
      'category',
      'brand',
      'type',
      'status',
      'photo',
      'comments'
    ],
    [TYPE_PROMO]: [
      'category',
      'brand',
      'type',
      'status',
      'photo',
      'comments'
    ],
    [TYPE_SHELF_SHARE]: [
      'category_shelf',
      'contract_shelf',
      'true_shelf',
      'error_shelf',
      'photo',
      'comments'
    ]
  };
  constructor( private notify: ElNotificationService,
               private router: Router,
               private route: ActivatedRoute,
               private taskService: TaskService) { }

  ngOnInit() {
    this.subscriptions = [
      this.route.params.subscribe(
        (params: {id: number, type: string}) => {
          this.taskId = params.id;
          this.taskType = params.type;
          console.log(this.displayedColumns[this.taskType]);
          this.taskTypeDisplay = TYPES.find(t => t.path === this.taskType).label;
          this.taskService.fetchTask(this.taskId, this.taskType);
        },
        err => {
          console.log(err);
          this.notify['error']('Данная задача не найдена', 'Переадресация...');
          setTimeout(() => {
            this.router.navigate(['/dashboard/tasks/']);
          }, 1500);
        }
      ),
      this.taskService.taskChanged.subscribe(
        (task: Task) => {
          this.task = task;
        }
      )
    ];
  }

  ngOnDestroy() {
    this.subscriptions.forEach(s => s.unsubscribe());
  }

  private isLoading(): boolean {
    return this.taskService.requestStatus === 'loading';
  }
}
