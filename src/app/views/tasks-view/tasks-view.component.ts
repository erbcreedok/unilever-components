import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs/index';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-tasks-view',
  templateUrl: './tasks-view.component.html',
  styleUrls: ['./tasks-view.component.scss']
})
export class TasksViewComponent implements OnInit, OnDestroy {

  selectedPath = '';
  subscriptions: Subscription[] = [];
  tabs: {label: string, path: string}[] = [
    {label: 'Мои задачи', path: 'my'},
    {label: 'Задачи сотрудников', path: 'other'}
  ];

  constructor(private router: Router,
              private route: ActivatedRoute) { }

  ngOnDestroy() {
    this.subscriptions.forEach(s => s.unsubscribe());
  }

  ngOnInit() {
    this.selectedPath = this.getSelectedPath();
    this.subscriptions.push(
        this.router.events.subscribe(() => {
          this.selectedPath = this.getSelectedPath();
        })
    );
  }

  getSelectedPath(): string {
    return this.route.snapshot.firstChild ? this.route.snapshot.firstChild.url[0].path : '';
  }

}
