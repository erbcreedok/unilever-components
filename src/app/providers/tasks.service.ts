import { Injectable } from '@angular/core';
import {Task, TaskInterface} from '../models/task.model';
import {HttpClient} from '@angular/common/http';
import {BASE_URL} from '../shared/CONSTANTS';
import {Subject} from 'rxjs/index';
import { map, tap } from 'rxjs/operators';
import {
  STATUS_DONE, STATUS_DONE_LATE,
  STATUS_IN_PROCESS, STATUS_NOT_DONE, STATUS_RECHECK, TASK_TYPE_LABELS,
  TYPE_COMPLEMENTARY, TYPE_PRICE_TRACKING, TYPE_PROMO,
  TYPE_SHELF_SHARE
} from '../dashboard/tasks/task-types.constants';

@Injectable()
export class TasksService {

  private apiRoutes = {
    [TYPE_PROMO]: 'promo-tasks',
    [TYPE_SHELF_SHARE]: 'shelf-share-tasks',
    [TYPE_PRICE_TRACKING]: 'price-tracking-tasks',
    [TYPE_COMPLEMENTARY]: 'complementary-tasks',
  };

  private statusValues = {
    [STATUS_IN_PROCESS]:  {value: 0},
    [STATUS_RECHECK]:     {value: 1},
    [STATUS_DONE]:        {value: 2},
    [STATUS_DONE_LATE]:   {value: 3},
    [STATUS_NOT_DONE]:    {value: 4},
  };

  public tasksChanged = new Subject<Task[]>();

  public total: number;
  public prevUrl: string;
  public nextUrl: string;
  public tasks: Task[];

  public requestStatus = 'idle';

  constructor(private httpClient: HttpClient) { }

  public getTasks(): Task[] {
    return this.tasks.slice();
  }

  private mutateTasks(tasks: Task[]) {
    this.tasks = tasks;
    this.tasksChanged.next(this.getTasks());
  }

  public fetchTasks(type: string, status: string) {
    this.requestStatus = 'loading';
    return this.requestTasks(type, status)
      .then(
        (tasks: Task[]) => {
          this.requestStatus = 'success';
          this.mutateTasks(tasks);
        }
      ).catch(
        err => {
          this.requestStatus = 'error';
          this.mutateTasks([]);
          console.log(err);
        }
      );
  }

  public fetchAllTasks() {
    this.requestStatus = 'loading';
    this.requestTaskQueue()
      .then((tasks: Task[]) => {
        this.requestStatus = 'success';
        this.mutateTasks(tasks);
      })
      .catch(
        err => {
          this.requestStatus = 'error';
          console.log(err);
        }
      );
  }

  async requestTasks(type: string, status: string): Promise<Task[]> {
    let statusQuery = '';
    if (status && status !== 'all') {
      statusQuery = `?status=${this.statusValues[status].value}`;
    }
    return (this.httpClient.get(`${BASE_URL}/api/tasks/${this.apiRoutes[type]}/${statusQuery}`)
      .pipe(map(
        (data: {results: TaskInterface[]}): Task[] => {
          const tasks: Task[] = [];
          data.results.forEach((t: TaskInterface) => {
            t.task_type = TASK_TYPE_LABELS[type];
            tasks.push(new Task(t));
          });
          return tasks;
        }
      )).toPromise() as Promise<Task[]>);
  }

  async requestTaskQueue(): Promise<Task[]> {
    const allTasks = [];
    await this.requestTasks(TYPE_PROMO, 'all').then((tasks: Task[]) => {
      allTasks.push(...tasks);
    });
    await this.requestTasks(TYPE_PRICE_TRACKING, 'all').then((tasks: Task[]) => {
      allTasks.push(...tasks);
    });
    await this.requestTasks(TYPE_SHELF_SHARE, 'all').then((tasks: Task[]) => {
      allTasks.push(...tasks);
    });
    return allTasks.slice();
  }
}
