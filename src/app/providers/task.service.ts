import { Injectable } from '@angular/core';
import {Subject} from 'rxjs/index';
import {HttpClient} from '@angular/common/http';
import {Task, TaskInterface} from '../models/task.model';
import {BASE_URL} from '../shared/CONSTANTS';
import {map} from 'rxjs/operators';
import {
  TYPE_COMPLEMENTARY, TYPE_PRICE_TRACKING, TYPE_PROMO,
  TYPE_SHELF_SHARE
} from '../dashboard/tasks/task-types.constants';

@Injectable()
export class TaskService {

  private apiRoutes = {
    [TYPE_PROMO]: 'promo-tasks',
    [TYPE_SHELF_SHARE]: 'shelf-share-tasks',
    [TYPE_PRICE_TRACKING]: 'price-tracking-tasks',
    [TYPE_COMPLEMENTARY]: 'complementary-tasks',
  }
  public taskChanged = new Subject<Task>();
  public task: Task;

  public requestStatus = 'idle';

  constructor(private httpClient: HttpClient) { }

  public getTask(): Task {
    return this.task.getTaskClone();
  }

  private mutateTask(task: Task) {
    this.task = task;
    this.taskChanged.next(this.getTask());
  }

  public fetchTask(id: number, type: string) {
    this.requestStatus = 'loading';
    return this.httpClient.get(`${BASE_URL}/api/tasks/${this.apiRoutes[type]}/${id}`).pipe(
        map((data: TaskInterface): Task => new Task(data))
    ).subscribe(
        (task: Task) => {
          this.requestStatus = 'success';
          console.log(task);
          this.mutateTask(task);
        },
        err => {
          this.requestStatus = 'error';
          console.log(err);
        }
    );
  }
}
