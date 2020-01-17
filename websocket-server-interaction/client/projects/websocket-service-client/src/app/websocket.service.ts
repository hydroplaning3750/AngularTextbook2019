import { Observable } from 'rxjs';

export class WebSocketService {
    private _socket: WebSocket;
    private _socketIsOpen: number = 1;

    createObservableSocket(url: string): Observable<any> {
        this._socket = new WebSocket(url);

        return new Observable<any>(
            observer => {
                this._socket.onmessage = (event) => observer.next(event.data);
                this._socket.onerror = (event) => observer.error(event);
                this._socket.onclose = (event) => observer.complete();

                return () => this._socket.close(1000, 'The user disconnected'); //Returns a callback so the caller can unsubscribe
            }
        );
    }

    sendMessage(message: string): string {
        let retMessage: string;
        if (this._socket.readyState === this._socketIsOpen) {   //Check if the connection is open
            this._socket.send(message);
            retMessage = `Sent the following message to the server: '${message}'`;
        } else {
            retMessage = 'Message was not sent - the socket is closed';
        }

        return retMessage;
    }
}