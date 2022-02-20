import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent implements OnInit {
  allowNewServers = false;
  serverName: string;
  serverCreated = false;
  servMessage = '';
  serversList = ['defServer 1', 'defServer 2'];
  count;
  //closure for counting
  counter = function () {
    this.count = 0;
    return function () {
      this.count++;
      this.serverCreated = true;
      this.serversList.push(this.serverName);
      this.servMessage = 'Server is created with the name : ' + this.serverName;
    };
  }.bind(this)();

  constructor() {
    setTimeout(() => {
      this.allowNewServers = true;
    }, 3000);
  }

  ngOnInit(): void {}
  onServernameTyped(event: Event): void {
    // console.log(event);
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
