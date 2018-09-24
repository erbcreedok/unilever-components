import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'ui-button',
  templateUrl: './ui-button.component.html',
  styleUrls: ['./ui-button.component.scss']
})
export class UiButtonComponent implements OnInit {

  @Input() disabled = false;
  
  constructor() { }

  ngOnInit() {
  }

}
