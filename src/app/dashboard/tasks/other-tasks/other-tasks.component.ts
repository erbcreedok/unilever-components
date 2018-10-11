import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs/index';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-other-tasks',
  templateUrl: './other-tasks.component.html',
  styleUrls: ['./other-tasks.component.scss']
})
export class OtherTasksComponent implements OnInit, OnDestroy {

  tabs: {label: string, path: string}[] = [
    {label: 'Промоактивности',  path: 'promoactivities'},
    {label: 'Проверка долей',   path: 'self-share'},
    {label: 'Сбор цен',         path: 'price-tracking'},
    {label: 'Дополнительные',   path: 'complementary'},
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
