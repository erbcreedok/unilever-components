import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  showNotifications = false;

  openNotifications() {
    if (!this.showNotifications) {
      setTimeout(() => {
        this.showNotifications = true;
      }, 100);
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
