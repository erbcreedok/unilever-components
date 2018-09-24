import {Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import {ProfileService} from '../../../providers/profile.service';
import {Employee} from '../../../models/employee.model';
import {Subscription} from 'rxjs/index';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import {PasswordValidation} from '../../../shared/validators/password.validation';

@Component({
  selector: 'app-profile-settings-form',
  templateUrl: './profile-settings-form.component.html',
  styleUrls: ['./profile-settings-form.component.scss']
})
export class ProfileSettingsFormComponent implements OnInit, OnDestroy {

  @Output() cancel = new EventEmitter();
  @Output() submit = new EventEmitter();

  cleanSubmit = true;
  private profileSubscription: Subscription;
  initValue = {
    first_name: '',
    last_name: '',
    phone: '',
    password: '',
    passwordC: ''
  };
  form = new FormGroup({
    first_name: new FormControl('', [Validators.required]),
    last_name: new FormControl('', [Validators.required]),
    phone: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.minLength(5)]),
    passwordC: new FormControl(''),
  }, [PasswordValidation.MatchPassword]);
  profile: Employee;

  constructor(private profileService: ProfileService) { }

  get isLoading() {
    return this.profileService.requestStatus === 'loading';
  }

  ngOnInit() {
    if (this.profileService.requestStatus === 'idle') {
      this.profileService.fetchProfile();
    }
    this.profile = this.profileService.getProfile();
    if (this.profile) {
      this.initValue = {
        first_name: this.profile.firstName,
        last_name: this.profile.lastName,
        phone: this.profile.phone,
        password: '',
        passwordC: ''
      };
      this.form.setValue(this.initValue);
      console.log('initValue', this.initValue);
      console.log('form', this.form);
      console.log('form.value', this.form.value);
    }
    this.profileSubscription = this.profileService.profileChanged.subscribe(
        (profile: Employee) => {
          this.profile = profile;
          this.initValue = {
            first_name: this.profile.firstName,
            last_name: this.profile.lastName,
            phone: this.profile.phone,
            password: '',
            passwordC: ''
          };
          this.form.setValue(this.initValue);
        }
    );
  }

  get isInitValues(): boolean {
    return (JSON.stringify(this.form.value) === JSON.stringify(this.initValue));
  }

  get controls(): {[p: string]: AbstractControl} {
    return this.form.controls;
  }

  get values() {
    return this.form.value;
  }

  ngOnDestroy() {
    this.profileSubscription.unsubscribe();
  }

  handleCancel() {
    console.log('cancel')
    this.cancel.emit();
  }

  handleSubmit() {
    this.cleanSubmit = false;
    // stop here if form is invalid
    if (this.form.invalid) {
      return;
    }
    this.profileService.changeProfileData(this.form.value).then(() => {
      this.submit.emit();
    });
  }

  messageCtrl(item: string): string {
    if (!this.form.controls[item]) {
      return;
    }
    const control: AbstractControl = this.controls[item];
    const message = 'Неверное заполнение';
    return (control.dirty && !this.cleanSubmit) && control.errors ? message : '';
  }
}
