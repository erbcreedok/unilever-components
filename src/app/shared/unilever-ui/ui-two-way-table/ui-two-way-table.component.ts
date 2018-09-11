import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-ui-two-way-table',
  templateUrl: './ui-two-way-table.component.html',
  styleUrls: ['./ui-two-way-table.component.scss']
})
export class UiTwoWayTableComponent implements OnInit {

  @Input() displayedColumns: string[];
  @Input() dataSource: any[];
  @Input() emptyMessage = 'Таблица пуста';

  constructor() { }

  ngOnInit() {
    console.log(this.dataSource);
  }

}
