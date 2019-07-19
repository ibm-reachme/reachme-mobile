import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-emergency',
  templateUrl: './emergency.page.html',
  styleUrls: ['./emergency.page.scss'],
})
export class EmergencyPage implements OnInit {

  constructor(private geolocation: Geolocation,
    public toastController: ToastController) { }

  latitude;
  longitude;

  ngOnInit() {
    this.showLocation();
  }

  showLocation() {
    console.log("Show location");

    this.geolocation.getCurrentPosition().then((resp) => {
      console.log("Latitude: " + resp.coords.latitude);
      console.log("Longitude: " + resp.coords.longitude);

      this.latitude = resp.coords.latitude;
      this.longitude = resp.coords.longitude;

      //this.presentToast(resp.coords.latitude, resp.coords.longitude);

    }).catch((error) => {
      console.log('Error getting location', error);
    });

  } 

  sendLocation(){
    this.presentToast(this.latitude,this.longitude);
  }

  async presentToast(lat, lon) {
    const toast = await this.toastController.create({
      message: 'Sending your location... Latitude: ' + lat + ' Longitude: ' + lon,
      duration: 2000
    });
    toast.present();
  }

}
