import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'ui-task-status',
  templateUrl: './task-status.component.html',
  styleUrls: ['./task-status.component.scss']
})
export class UiTaskStatusComponent implements OnInit {

  @Input() status: number;

  constructor() { }

  ngOnInit() {
  }

}
