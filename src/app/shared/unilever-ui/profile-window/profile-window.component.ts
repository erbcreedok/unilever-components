import {Component, Input, OnInit} from '@angular/core';
import {Employee} from '../../../models/employee.model';

@Component({
  selector: 'ui-profile-window',
  templateUrl: './profile-window.component.html',
  styleUrls: ['./profile-window.component.scss']
})
export class ProfileWindowComponent implements OnInit {

  @Input() canControl = false;
  @Input() profile: Employee;

  constructor() { }

  ngOnInit() {
  }

}
