import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ui-profile-window',
  templateUrl: './profile-window.component.html',
  styleUrls: ['./profile-window.component.scss']
})
export class ProfileWindowComponent implements OnInit {

  data: any[] = [
    {
      value: 'hello',
      label: 'hello'
    },
    {
      value: 'world!',
      label: 'world!'
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
