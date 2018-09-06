import { Injectable } from '@angular/core';
import {Task, TaskInterface} from '../models/task.model';
import {HttpClient} from '@angular/common/http';
import {BASE_URL} from '../shared/CONSTANTS';
import {Subject} from 'rxjs/index';
import { map, tap } from 'rxjs/operators';

@Injectable()
export class TasksService {

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

  public fetchTasks() {
    this.requestStatus = 'loading';
    return this.httpClient.get(BASE_URL + '/api/tasks/promo-tasks/')
      .pipe(map(
        (data: {results: TaskInterface[]}): Task[] => {
          console.log(data);
          const tasks: Task[] = [];
          data.results.forEach((t: TaskInterface) => {
            tasks.push(new Task(t));
          });
          return tasks;
        }
      ))
      .subscribe(
        (tasks: Task[]) => {
          this.requestStatus = 'success';
          this.mutateTasks(tasks);
        },
        err => {
          this.requestStatus = 'error';
          console.log(err);
        }
    );
  }

}
