import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'ui-icon-circle',
  templateUrl: './ui-icon-circle.component.html',
  styleUrls: ['./ui-icon-circle.component.scss']
})
export class UiIconCircleComponent implements OnInit {

  @Input() icon = '';

  constructor() { }

  ngOnInit() {
  }

}
