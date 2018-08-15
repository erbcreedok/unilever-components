import {Component, HostBinding, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'ui-profile-box',
  templateUrl: './profile-box.component.html',
  styleUrls: ['./profile-box.component.scss'],
})
export class ProfileBoxComponent implements OnInit {

  @HostBinding('class.box') hostClass = true;

  constructor(private router: Router) { }

  ngOnInit() {
  }

}
