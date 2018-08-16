import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {

  @Input() status: string;

  constructor() { }

  ngOnInit() {
  }

}
