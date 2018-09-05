import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'ui-chart-legends',
  templateUrl: './ui-chart-legends.component.html',
  styleUrls: ['./ui-chart-legends.component.scss']
})
export class UiChartLegendsComponent implements OnInit {

  @Input() data: Array<{backgroundColor: string, label: string}>;
  @Input() vertical = false;

  constructor() { }

  ngOnInit() {
  }

}
