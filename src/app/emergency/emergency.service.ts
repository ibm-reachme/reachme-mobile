import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Profile } from '../profile/profile';


@Injectable({
  providedIn: 'root'
})
export class EmergencyService {

  constructor(private http: HttpClient) { }

  private getUserUrl = 'http://localhost:3000/user';
  private saveUserUrl = 'http://localhost:3000/user';


  public getUsers() {
    return this.http.get(this.getUserUrl);
  }

  public saveUser(profile: Profile) {
    console.log('Sending userprofile to database', profile);
    this.http.post(this.saveUserUrl, profile).subscribe(res => console.log(res));

  }

}
