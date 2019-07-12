import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  name: string;

  constructor(private storage: Storage) { }

  ngOnInit() {
    this.storage.get('name').then(val => {
      this.name = val;
    });
  }

  saveName() {
    this.storage.set('name', this.name);
  }

}
