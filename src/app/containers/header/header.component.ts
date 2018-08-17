import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  showNotifications = false;
  showNewTask = false;

  constructor() { }

  ngOnInit() {
  }


  openNotifications() {
    if (!this.showNotifications) {
      setTimeout(() => {
        this.showNotifications = true;
      }, 10);
    }
  }
  closeNotifications() {
    if (this.showNotifications) {
      this.showNotifications = false;
    }
  }
  openNewTask() {
    if (!this.showNewTask) {
      setTimeout(() => {
        this.showNewTask = true;
      }, 10);
    }
  }

}
