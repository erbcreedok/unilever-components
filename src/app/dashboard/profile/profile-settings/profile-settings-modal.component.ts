import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material';
import {Router} from '@angular/router';
import {ProfileSettingsFormComponent} from './profile-settings-form.component';

@Component({
  selector: 'app-profile-settings-modal',
  template: ''
})
export class ProfileSettingsModalComponent implements OnInit {

  constructor(private modal: MatDialog,
              private router: Router) { }

  ngOnInit() {
    setTimeout(() => {
      const modalRef = this.modal.open(ProfileSettingsFormComponent);
      modalRef.afterClosed().subscribe(() => {
        this.router.navigate(['/dashboard']);
      });
      modalRef.componentInstance.cancel.subscribe(() => {
        modalRef.close();
      });
    }, 1);
  }

}
