import { Component, OnInit } from '@angular/core';
import {TasksService} from '../../providers/tasks.service';
import {Subscription} from 'rxjs/index';
import { Task } from '../../models/task.model';
import {isSameDay} from 'date-fns';

interface EventTask {
  start: Date;
  end: Date;
  tasks: Task[];
}

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {

  subscriptions: Subscription[] = [];
  eventTasks: EventTask[] = [];

  constructor(private tasksService: TasksService) {}

  ngOnInit() {
    this.tasksService.fetchAllTasks();
    this.subscriptions = [
      this.tasksService.tasksChanged.subscribe(
        (tasks: Task[]) => {
          this.eventTasks = [];
          tasks.forEach((task: Task) => {
            let exists = false;
            this.eventTasks.forEach((eventTask: EventTask) => {
              if (
                isSameDay(eventTask.start, task.startDate) &&
                isSameDay(eventTask.end, task.endDate)
              ) {
                eventTask.tasks.push(task);
                exists = true;
              }
            });
            if (!exists) {
              this.eventTasks.push({
                start: task.startDate,
                end: task.endDate,
                tasks: [task]
              });
            }
          });
        }
      )
    ];
  }

}
