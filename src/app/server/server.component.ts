import { Component } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrl: './server.component.css'
})
export class ServerComponent {
  allowNewServer = false;
  userName = "TEst";
  name!: string;

  constructor(){
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  onUpdateUserName(event: Event){
    this.name = (<HTMLInputElement>event.target).value;
  }
}
