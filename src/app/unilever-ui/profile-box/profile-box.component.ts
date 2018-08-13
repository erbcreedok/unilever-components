import {Component, HostBinding, OnInit} from '@angular/core';

@Component({
  selector: 'ui-profile-box',
  templateUrl: './profile-box.component.html',
  styleUrls: ['./profile-box.component.scss'],
})
export class ProfileBoxComponent implements OnInit {

  @HostBinding('class.box') hostClass = true;

  constructor() { }

  ngOnInit() {
  }

}
