import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material';
import {Router} from '@angular/router';
import {ProfileAvatarUploadComponent} from './profile-avatar-upload.component';

@Component({
  selector: 'app-profile-avatar-upload-modal',
  template: ''
})
export class ProfileAvatarUploadModalComponent implements OnInit {

  constructor(private modal: MatDialog,
              private router: Router) { }

  ngOnInit() {
    setTimeout(() => {
      const modalRef = this.modal.open(ProfileAvatarUploadComponent);
      modalRef.afterClosed().subscribe(() => {
        this.router.navigate(['/dashboard']);
      });
      modalRef.componentInstance.cancel.subscribe(() => {
        modalRef.close();
      });
      modalRef.componentInstance.submit.subscribe(() => {
        setTimeout(() => {
          modalRef.close();
        }, 500);
      });
    }, 1);
  }

}
