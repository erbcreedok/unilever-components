import { Injectable } from '@angular/core';
import {Employee, EmployeeInterface} from '../models/employee.model';
import {HttpClient} from '@angular/common/http';
import {BASE_URL} from '../shared/CONSTANTS';
import {Subject} from 'rxjs/index';

@Injectable()
export class ProfileService {

  public profileChanged = new Subject<Employee>();

  public profile: Employee;

  public requestStatus = 'idle';

  constructor(private httpClient: HttpClient) { }

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
}
