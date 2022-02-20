import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css'],
})
export class ServerComponent {
  serverId = 10;
  serverStatus = 'offline';
  constructor() {
    this.serverId = Math.floor(Math.random() * 10);
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
  }
  getServerColor() {
    return this.serverStatus === 'online' ? 'green' : 'red';
  }
}
