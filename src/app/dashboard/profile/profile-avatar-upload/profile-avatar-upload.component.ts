import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ProfileService} from '../../../providers/profile.service';
import {ElNotificationService} from 'element-angular/release/notification/notification.service';

@Component({
  selector: 'app-profile-avatar-upload',
  templateUrl: './profile-avatar-upload.component.html',
  styleUrls: ['./profile-avatar-upload.component.scss']
})
export class ProfileAvatarUploadComponent implements OnInit {

  @Output() cancel = new EventEmitter();
  @Output() submit = new EventEmitter();


  cleanSubmit = true;
  file: File;

  constructor(private profileService: ProfileService,
              private notify: ElNotificationService) { }

  ngOnInit() {

  }

  get isLoading() {
    return this.profileService.requestStatus === 'loading';
  }

  handleCancel() {
    console.log('cancel')
    this.cancel.emit();
  }

  handleSubmit() {
    console.log('handling submit');
    this.profileService.changeProfileAvatar(this.file)
      .then(() => {
        this.notify.success('Загрузка прошла успешно');
        this.cleanSubmit = false;
        this.submit.emit();
      })
      .catch(err => {
        this.notify.error('Произошла ошибка при загрузке данных');
      });
  }

  successHandle(file: any): void {
    this.file = file.commonFile.raw;
    this.handleSubmit();
  }

  imageFilter(file: File): boolean {
    console.log(file);
    if (file.size > 1048576) {
      this.notify.error('Максимально допустимый размер файла 1MB', 'Ошибка при загрузке');
      return false;
    }
    if (file.type.indexOf('image') === -1) {
      this.notify.error('Данный файл не является изображением', 'Ошибка при загрузке');
      return false;
    }
    return true;
  }
}
