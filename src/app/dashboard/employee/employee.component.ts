import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit, OnDestroy {

  subscriptions: Subscription[] = [];


  links = [
    {label: 'Промоактивности', link: 'promoactivities'},
    {label: 'Проверка долей', link: 'check-parts'},
    {label: 'Дополнительные задачи', link: 'tasks'},
  ];
  selectedPath: string;
  id: number;

  constructor(private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
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
