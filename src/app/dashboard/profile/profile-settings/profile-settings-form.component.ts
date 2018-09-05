import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-profile-settings-form',
  templateUrl: './profile-settings-form.component.html',
  styleUrls: ['./profile-settings-form.component.scss']
})
export class ProfileSettingsFormComponent implements OnInit {

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
