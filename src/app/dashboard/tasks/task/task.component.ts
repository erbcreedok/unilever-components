import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Subscription} from 'rxjs/index';
import {ElNotificationService} from 'element-angular/release/notification/notification.service';
import { Task } from '../../../models/task.model';
import {TaskService} from '../../../providers/task.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit, OnDestroy {

  taskId: number;
  task: Task;
  subscriptions: Subscription[] = [];

  constructor( private notify: ElNotificationService,
               private router: Router,
               private route: ActivatedRoute,
               private taskService: TaskService) { }

  ngOnInit() {
    this.subscriptions = [
      this.route.params.subscribe(
        (params: {id: number}) => {
          this.taskId = params.id;
          this.taskService.fetchTask(this.taskId);
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
