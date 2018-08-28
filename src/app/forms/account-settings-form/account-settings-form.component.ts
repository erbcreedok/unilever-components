import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-account-settings-form',
  templateUrl: './account-settings-form.component.html',
  styleUrls: ['./account-settings-form.component.scss']
})
export class AccountSettingsFormComponent implements OnInit {
  @Output() cancel = new EventEmitter();
  @Output() submit = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  handleCancel() {
    console.log('cancel')
    this.cancel.emit();
  }

  handleSubmit() {
    console.log('submit')
    this.submit.emit();
  }

}
