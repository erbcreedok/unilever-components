import {Component, Input, OnInit} from '@angular/core';
import {Item} from '../../../../models/item.model';

@Component({
  selector: 'ui-items-data-table',
  templateUrl: './ui-items-data-table.component.html',
  styleUrls: ['./ui-items-data-table.component.scss']
})
export class UiItemsDataTableComponent implements OnInit {

  @Input() displayedColumns: string[];
  @Input() dataSource: Item[];
  @Input() emptyMessage = 'Таблица пуста';

  constructor() { }

  ngOnInit() {
  }

  generateRandom(min: number, max: number) {
    return Math.floor(min + Math.random() * (max + 1 - min));
  }
}
