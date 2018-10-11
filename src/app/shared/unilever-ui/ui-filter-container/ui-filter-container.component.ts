import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ui-filter-container',
  templateUrl: './ui-filter-container.component.html',
  styleUrls: ['./ui-filter-container.component.scss']
})
export class UiFilterContainerComponent implements OnInit {

  isVisible = false;

  constructor() { }

  ngOnInit() {
  }

}
