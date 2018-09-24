import { Injectable } from '@angular/core';
import {Employee, EmployeeInterface} from '../models/employee.model';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {BASE_URL} from '../shared/CONSTANTS';
import {Subject} from 'rxjs/index';
import {HttpParamsOptions} from '@angular/common/http/src/params';

interface ProfileResponse {
  first_name: string;
  last_name: string;
  phone: string;
  avatar: string;
}

@Injectable()
export class ProfileService {

  public profileChanged = new Subject<Employee>();

  public profile: Employee;

  public requestStatus = 'idle';

  constructor(private httpClient: HttpClient) {}

  public getProfile(): Employee {
    return this.profile ? new Employee(this.profile.getEmployeeInterface()) : null;
  }

  private mutateProfile(profile: Employee) {
    this.profile = profile;
    this.profileChanged.next(this.getProfile());
  }

  public fetchProfile() {
    this.requestStatus = 'loading';
    return this.httpClient.get(BASE_URL + '/api/users/profile/').subscribe(
      (data: EmployeeInterface) => {
        this.requestStatus = 'success';
        this.mutateProfile(new Employee(data));
      },
      err => {
        this.requestStatus = 'error';
        console.log(err);
      }
    );
  }

  public changeProfileData(data: any) {
    this.requestStatus = 'loading';
    if (data.password === '') {
      delete data.password;
    }
    return (this.httpClient.put(BASE_URL + '/api/users/profile/', data).toPromise() as Promise<ProfileResponse>)
      .then((res: ProfileResponse) => {
        this.profile.firstName = res.first_name;
        this.profile.lastName = res.last_name;
        this.profile.phone = res.phone;
        this.mutateProfile(this.profile);
        this.requestStatus = 'success';
        return this.getProfile();
      })
      .catch(err => {
        console.log(err);
        this.requestStatus = 'error';
        throw new Error(err);
      });
  }

  public changeProfileAvatar(file: any) {
    this.requestStatus = 'loading';
    const formData: FormData = new FormData();
    formData.append('avatar', file, file.name);
    return (this.httpClient.put(
        BASE_URL + '/api/users/profile/',
        formData
    ).toPromise() as Promise<ProfileResponse>)
      .then((res: ProfileResponse) => {
        this.profile.firstName = res.first_name;
        this.profile.lastName = res.last_name;
        this.profile.phone = res.phone;
        this.profile.avatar = res.avatar;
        this.mutateProfile(this.profile);
        this.requestStatus = 'success';
        return this.getProfile();
      })
      .catch(err => {
        console.log(err);
        this.requestStatus = 'error';
        throw new Error(err);
      });
  }
}
