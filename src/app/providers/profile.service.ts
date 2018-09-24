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
    console.log('mutate new profile');
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
    if (data.password === '') {
      delete data.password;
    }
    this.httpClient.put(BASE_URL + '/api/users/profile/', data).toPromise()
      .then((res: {first_name: string, last_name: string, phone: string}) => {
        this.profile.firstName = res.first_name;
        this.profile.lastName = res.last_name;
        this.profile.phone = res.phone;
        this.mutateProfile(this.profile);
        console.log(res);
      }
    );
  }
}
