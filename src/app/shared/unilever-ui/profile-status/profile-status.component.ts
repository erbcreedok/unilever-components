import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'ui-profile-status',
  templateUrl: './profile-status.component.html',
  styleUrls: ['./profile-status.component.scss']
})
export class ProfileStatusComponent implements OnInit {

  @Input() status: number;

  constructor() {
  }

  ngOnInit() {
  }

}
