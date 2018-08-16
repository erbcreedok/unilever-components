import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Subscription} from 'rxjs/index';

@Component({
  selector: 'app-employee-view',
  templateUrl: './employee-view.component.html',
  styleUrls: ['./employee-view.component.scss']
})
export class EmployeeViewComponent implements OnInit, OnDestroy {

  subscriptions: Subscription[] = [];


  links = [
    {label: 'Промоактивности', link: 'promoactivities'},
    {label: 'Проверка долей', link: 'check-parts'},
    {label: 'Дополнительный задачи', link: 'tasks'},
  ];
  selectedPath: string;
  id: number;

  constructor(private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    console.log(this.router);
    this.selectedPath = this.route.snapshot.firstChild.url[0].path;
    this.subscriptions.push(
        this.router.events.subscribe(() => {
          this.selectedPath = this.route.snapshot.firstChild.url[0].path;
        })
    );

  }

  ngOnDestroy() {
    this.subscriptions.forEach(s => s.unsubscribe());
  }

}
