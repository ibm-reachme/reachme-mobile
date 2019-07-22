import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { ToastController } from '@ionic/angular';
import { EmergencyService } from './emergency.service';
import { Profile } from '../profile/profile';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-emergency',
  templateUrl: './emergency.page.html',
  styleUrls: ['./emergency.page.scss'],
})
export class EmergencyPage implements OnInit {

  constructor(private geolocation: Geolocation,
    public toastController: ToastController,
    private emergencyService: EmergencyService,
    private storage: Storage) { }

  latitude;
  longitude;
  username;

  status = "Click on the button to register an emergency case";

  ngOnInit() {
    this.getLocation();

    this.storage.get('name').then(val => {
      this.username = val;
    });
  }

  getLocation() {
    this.geolocation.getCurrentPosition().then((resp) => {

      this.latitude = resp.coords.latitude;
      this.longitude = resp.coords.longitude;

    }).catch((error) => {
      console.log('Error getting location', error);
    });

  }

  confirmEmergency() {

    //this.emergencyService.getUsers().subscribe(data => console.log(data));
    let profile = new Profile();
    profile.name = this.username;
    profile.latitude = this.latitude;
    profile.longitude  = this.longitude;

    this.emergencyService.saveUser(profile);
    
    this.status = "Your request has been registered with us";
    //this.presentToast(this.latitude, this.longitude);
  }

  async presentToast(lat, lon) {
    const toast = await this.toastController.create({
      message: 'Sending your location... Latitude: ' + lat + ' Longitude: ' + lon,
      duration: 2000
    });
    toast.present();
  }

}
