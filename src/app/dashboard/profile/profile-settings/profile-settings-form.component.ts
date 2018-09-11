import {Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import {ProfileService} from '../../../providers/profile.service';
import {Employee} from '../../../models/employee.model';
import {Subscription} from 'rxjs/index';

@Component({
  selector: 'app-profile-settings-form',
  templateUrl: './profile-settings-form.component.html',
  styleUrls: ['./profile-settings-form.component.scss']
})
export class ProfileSettingsFormComponent implements OnInit, OnDestroy {

  @Output() cancel = new EventEmitter();
  @Output() submit = new EventEmitter();

  private profileSubscription: Subscription;
  profile: Employee;
  password: string;

  constructor(private profileService: ProfileService) { }

  ngOnInit() {
    if (this.profileService.requestStatus === 'idle') {
      this.profileService.fetchProfile();
    }
    this.profile = this.profileService.getProfile();
    this.profileSubscription = this.profileService.profileChanged.subscribe(
        (profile: Employee) => {
          this.profile = profile;
        }
    );
  }

  ngOnDestroy() {
    this.profileSubscription.unsubscribe();
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
