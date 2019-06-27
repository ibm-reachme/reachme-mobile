import { Component } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private geolocation: Geolocation,
    public toastController: ToastController) { }

  async presentToast(lat, lon) {
    const toast = await this.toastController.create({
      message: 'Latitude: ' + lat + ' Longitude: ' + lon,
      duration: 2000
    });
    toast.present();
  }

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

}
