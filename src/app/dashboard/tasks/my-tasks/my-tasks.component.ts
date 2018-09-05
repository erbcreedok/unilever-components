import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Subscription} from 'rxjs/index';

@Component({
  selector: 'app-my-tasks',
  templateUrl: './my-tasks.component.html',
  styleUrls: ['./my-tasks.component.scss']
})
export class MyTasksComponent implements OnInit, OnDestroy {

  tabs: {label: string, path: string}[] = [
    {label: 'В процессе',       path: 'in-process'},
    {label: 'Перепроверить',    path: 'recheck'},
    {label: 'Выполнено',        path: 'done'},
    {label: 'Не выполнено',     path: 'not-done'},
    {label: 'Поручено',         path: 'entrusted'},
    {label: 'Ожидают контроля', path: 'waiting'},
    {label: 'Принял',           path: 'accepted'},
    {label: 'Отклонил',         path: 'rejected'},
  ];
  selectedPath = '';
  subscriptions: Subscription[] = [];


  constructor(private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.selectedPath = this.getSelectedPath();
    this.subscriptions.push(
        this.router.events.subscribe(() => {
          this.selectedPath = this.getSelectedPath();
        })
    );
  }

  ngOnDestroy() {
    this.subscriptions.forEach(s => s.unsubscribe());
  }

  getSelectedPath(): string {
    return this.route.snapshot.firstChild ? this.route.snapshot.firstChild.url[0].path : '';
  }

}
