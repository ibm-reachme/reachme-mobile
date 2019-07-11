import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SuppliesService {

  nickname;
  constructor() { }

  public setNickname(nickname){
    this.nickname = nickname;
  }

  public getNickname(){
    return this.nickname;
  }
}
