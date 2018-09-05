import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-check-parts-table',
  templateUrl: './check-parts-table.component.html',
  styleUrls: ['./check-parts-table.component.scss']
})
export class CheckPartsTableComponent implements OnInit {

  @ViewChild('cellTemplate') cellTemplate: TemplateRef<any>;
  loading = false;

  rows = [];
  initCol = { name: 'Категория', prop: 'category', width: 200, frozenLeft: true };
  columns: Array<any> = [];

  constructor() {
  }

  ngOnInit() {
    this.loading = true;
    setTimeout( () => {
      const newRows = [];
      const doors = ['Магнум', 'ADK', 'Скиф', 'Юбилейный'];
      const items = ['Зубная паста', 'Зубная щетка', 'Шампунь', 'Мыло', 'Кондиционер', 'Крем для рук'];
      for (let i = 0; i < 40; i++) {
        const row = {category: doors[i % doors.length]};
        for (let j = 1; j < 12; j++) {
          row[j] = Math.floor(Math.random() * (10 + 3)) - 3;
        }
        newRows.push(row);
      }
      const newItems: Array<any> = [];
      for (let i = 1; i < 12; i++) {
        newItems.push({name: items[i % items.length], prop: i, cellTemplate: this.cellTemplate});
      }
      this.rows = newRows;
      this.columns = [
        this.initCol,
        ...newItems
      ];
      this.loading = false;
    }, 1500);
  }

}
