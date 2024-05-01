import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrl: './servers.component.css'
})
export class ServersComponent {
  allowNewServer!: boolean;
  userName = "";
  serverStatus: string = '';

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
  
  getStatus(){
    this.serverStatus = Math.random() > 0.5 ? 'success' : 'fail';
    return this.serverStatus;
  }
}
