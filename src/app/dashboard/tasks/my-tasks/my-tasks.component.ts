import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Subscription} from 'rxjs/index';
import {STATUSES, TYPES} from '../task-types.constants';

@Component({
  selector: 'app-my-tasks',
  templateUrl: './my-tasks.component.html',
  styleUrls: ['./my-tasks.component.scss']
})
export class MyTasksComponent implements OnInit, OnDestroy {

  tabs: {label: string, path: string} [] = STATUSES;

  types: {label: string, path: string} [] = TYPES;
  selectedPath = '';
  selectedType = '';
  subscriptions: Subscription[] = [];


  constructor(private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.selectedPath = this.getSelectedPath();
    this.selectedType = this.getSelectedType();
    this.subscriptions = [
      this.router.events.subscribe(() => {
        this.selectedPath = this.getSelectedPath();
        this.selectedType = this.getSelectedType();
      })
    ];
  }

  ngOnDestroy() {
    this.subscriptions.forEach(s => s.unsubscribe());
  }

  getSelectedPath(): string {
    return this.route.snapshot.firstChild ? this.route.snapshot.firstChild.url[0].path : '';
  }

  getSelectedType(): string {
    return this.route.snapshot.firstChild ? this.route.snapshot.firstChild.url[1].path : '';
  }

}
