import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import {AccountSettingsFormComponent} from '../../forms/account-settings-form/account-settings-form.component';
import {Router} from '@angular/router';

@Component({
  selector: 'app-account-settings-modal',
  templateUrl: './account-settings-modal.component.html',
  styleUrls: ['./account-settings-modal.component.scss']
})
export class AccountSettingsModalComponent implements OnInit {

  constructor(private modal: MatDialog,
              private router: Router) { }

  ngOnInit() {
    setTimeout(() => {
      const modalRef = this.modal.open(AccountSettingsFormComponent);
      modalRef.afterClosed().subscribe(() => {
        this.router.navigate(['/home']);
      });
      modalRef.componentInstance.cancel.subscribe(() => {
        modalRef.close();
      });
    }, 1);
  }

}
