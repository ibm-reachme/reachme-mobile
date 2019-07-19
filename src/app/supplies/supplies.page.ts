import { Component, OnInit } from '@angular/core';
import * as io from 'socket.io-client';
import { Observable } from 'rxjs';
import { ToastController } from '@ionic/angular';
import { SuppliesService } from './supplies.service';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-supplies',
  templateUrl: './supplies.page.html',
  styleUrls: ['./supplies.page.scss'],
})
export class SuppliesPage implements OnInit {

  socket: any;
  messages = [];
  nickname = 'Sandesh';
  message = '';

  constructor(private toastCtrl: ToastController,
    private storage: Storage) {
  }

  ngOnInit() {

    this.storage.get('name').then(val => {
      this.nickname = val;
      console.log("got data from storage",val);
      
    });

    this.socket = io('http://localhost:3000');

    this.socket.connect();

    this.socket.emit('set-nickname', this.nickname);

    this.getMessages().subscribe(message => {
      this.messages.push(message);
    });

    this.getUsers().subscribe(data => {
      let user = data['user'];
      /* if (data['event'] === 'left') {
        this.showToast('User left: ' + user);
      } else {
        this.showToast('User joined: ' + user);
      } */
    });
  }


  sendMessage() {
    this.socket.emit('add-message', { text: this.message });
    this.message = '';
  }

  getMessages() {
    let observable = new Observable(observer => {
      this.socket.on('message', (data) => {
        observer.next(data);
      });
    })
    return observable;
  }

  getUsers() {
    let observable = new Observable(observer => {
      this.socket.on('users-changed', (data) => {
        observer.next(data);
      });
    });
    return observable;
  }

  ionViewWillLeave() {
    this.socket.disconnect();
  }

  async showToast(msg) {
    const toast = await this.toastCtrl.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }

}
