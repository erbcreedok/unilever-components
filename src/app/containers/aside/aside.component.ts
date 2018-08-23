import {Component, isDevMode, OnInit} from '@angular/core';
@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.scss']
})
export class AsideComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log(isDevMode());
  }

}
