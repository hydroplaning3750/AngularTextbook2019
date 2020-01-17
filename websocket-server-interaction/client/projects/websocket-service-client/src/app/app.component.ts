import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { WebSocketService } from './websocket.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'websocket-service-client';

  messageFromServer: string;
  status: any;

  private _wsSubscription: Subscription;

  constructor(private _wsService: WebSocketService) {
    this._wsSubscription = 
      this._wsService.createObservableSocket('ws://localhost:8085') //Connects to the server
        .subscribe(
          data => this.messageFromServer = data,
          err => console.log(err),
          () => console.log('The observable stream is complete')
        );
  }

  sendMessageToServer() {
    this.status = this._wsService.sendMessage('Hello from client');
  }

  closeSocket() {
    this._wsSubscription.unsubscribe(); //Closes the WebSocket connection
    this.status = 'The socket is closed';
  }

  ngOnDestroy() {
    this.closeSocket();
  }
}
