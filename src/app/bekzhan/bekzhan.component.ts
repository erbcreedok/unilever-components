import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bekzhan',
  templateUrl: './bekzhan.component.html',
  styleUrls: ['./bekzhan.component.scss']
})
export class BekzhanComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onOpenAbout() {
    console.log('on open about');
  }
}
