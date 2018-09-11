import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-new-task-form',
  templateUrl: './new-task-form.component.html',
  styleUrls: ['./new-task-form.component.scss']
})
export class NewTaskFormComponent implements OnInit {

  @Output() close = new EventEmitter<void>();

  taskTypes = [
    { value: 'FreeTask', label: 'Свободная задача' },
    { value: 'CheckPromoactivity', label: 'Проверка промоактивностей' }
  ];
  taskType: string;
  value: string;

  constructor() {
    this.taskType = this.taskTypes[0].value;
  }

  ngOnInit() {
  }

  onCloseClick() {
    this.close.emit();
  }

}
