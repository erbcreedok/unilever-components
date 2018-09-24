import {Component, OnDestroy, OnInit} from '@angular/core';
import {ProfileService} from '../../providers/profile.service';
import {Employee} from '../../models/employee.model';
import {Subscription} from 'rxjs/index';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit, OnDestroy {

  private profileSubscription: Subscription;
  profile: Employee;

  constructor(
      private profileService: ProfileService
  ) { }

  ngOnInit() {
    this.profileService.fetchProfile();
    this.profile = this.profileService.getProfile();
    this.profileSubscription = this.profileService.profileChanged.subscribe(
        (profile: Employee) => {
          console.log('get new profile');
          this.profile = profile;
        }
    );
  }

  ngOnDestroy() {
    this.profileSubscription.unsubscribe();
  }

}
