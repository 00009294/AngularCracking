import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrl: './server.component.css'
})
export class ServerComponent implements OnInit{
 @Input() serverStatus: string ='' ;

  constructor(){ }

  ngOnInit() { }
  
  setColor(){
    return this.serverStatus === 'success' ? 'green' : 'red';
  }

  getStatus(){
    return this.serverStatus;
  }

}
