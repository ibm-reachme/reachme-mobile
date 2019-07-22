import { Component, OnInit } from '@angular/core';
import { EmergencyService } from '../emergency/emergency.service';
import { Profile } from '../profile/profile';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})
export class AdminPage implements OnInit {
  
  profiles: Profile[];

  constructor(private emergencyService: EmergencyService) { }

  ngOnInit() {
  this.emergencyService.getUsers().subscribe(profiles => {
    console.log(profiles);
    this.profiles = profiles;
  });
  }



}
