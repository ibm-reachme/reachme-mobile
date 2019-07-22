import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { SuppliesService } from '../supplies/supplies.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
   
    private router: Router,
    private route: Router) { }

  subscribeToUpdates(){
    this.route.navigateByUrl('/updates');
  }

  openSupplies() {
     this.router.navigateByUrl('/supplies');
  }

  openEmergency(){
    this.router.navigateByUrl('/emergency');
  }

}
