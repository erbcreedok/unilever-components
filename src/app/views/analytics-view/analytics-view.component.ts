import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs/index';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-analytics-view',
  templateUrl: './analytics-view.component.html',
  styleUrls: ['./analytics-view.component.scss']
})
export class AnalyticsViewComponent implements OnInit, OnDestroy {

  selectedPath = '';
  subscriptions: Subscription[] = [];
  tabs: {label: string, path: string}[] = [
    {label: 'Промоактивоности', path: 'promoactivities'},
    {label: 'Проверка долей',   path: 'check-parts'},
    {label: 'Дополнительные',   path: 'additional'}
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
