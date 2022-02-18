import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent implements OnInit {
  allowNewServers = false;
  serverName: string;
  count;
  //closure for counting
  counter = function () {
    this.count = 0;
    return function () {
      this.count++;
      console.log(this.count);
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
