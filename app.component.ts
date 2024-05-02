import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [{type: 'TestType', name:'TestServer', content: 'Just a server'}];


  onServerAddServer(serverData: {name: string, content: string}) {
    this.serverElements.push({
      type: 'server',
      name: serverData.name,
      content: serverData.content
    });
  }

  onServerAddBlueprint(dataServer: {name: string, content: string}) {
    this.serverElements.push({
      type: 'blueprint',
      name: dataServer.name,
      content: dataServer.content
    });
  }
 
}
