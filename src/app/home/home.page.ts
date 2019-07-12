import { Component } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { ToastController } from '@ionic/angular';
import * as io from 'socket.io-client';
import { Router } from '@angular/router';
import { SuppliesService } from '../supplies/supplies.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  nickname;

  constructor(private geolocation: Geolocation,
    public toastController: ToastController,
    private router: Router,
    private suppliesService : SuppliesService) { }

 
  showLocation() {
    console.log("Show location");

    this.geolocation.getCurrentPosition().then((resp) => {
      console.log("Latitude: " + resp.coords.latitude);
      console.log("Longitude: " + resp.coords.longitude);

      this.presentToast(resp.coords.latitude, resp.coords.longitude);

    }).catch((error) => {
      console.log('Error getting location', error);
    });

  }

  async presentToast(lat, lon) {
    const toast = await this.toastController.create({
      message: 'Sending your location... Latitude: ' + lat + ' Longitude: ' + lon,
      duration: 2000
    });
    toast.present();
  }



  joinChat() {
    this.suppliesService.setNickname(this.nickname);
    this.router.navigateByUrl('/supplies');
  }

}
