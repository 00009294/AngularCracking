import { Component } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrl: './server.component.css'
})
export class ServerComponent {
  allowNewServer!: boolean;
  userName = "";

  constructor(){
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  setName(str: string){
    if(str === ''){
      return true;
    } else return false;
  }
  setEmpty(str: string){
    this.userName = '';
  }
  
}
