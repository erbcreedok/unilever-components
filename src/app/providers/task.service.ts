import { Injectable } from '@angular/core';
import {Subject} from 'rxjs/index';
import {HttpClient} from '@angular/common/http';
import {Task, TaskInterface} from '../models/task.model';
import {BASE_URL} from '../shared/CONSTANTS';
import {map} from 'rxjs/operators';

@Injectable()
export class TaskService {

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

  public fetchTask(id: number) {
    this.requestStatus = 'loading';
    return this.httpClient.get(BASE_URL + '/api/tasks/promo-tasks/' + id).pipe(
        map((data: TaskInterface): Task => new Task(data))
    ).subscribe(
        (task: Task) => {
          this.requestStatus = 'success';
          this.mutateTask(task);
        },
        err => {
          this.requestStatus = 'error';
          console.log(err);
        }
    );
  }
}
