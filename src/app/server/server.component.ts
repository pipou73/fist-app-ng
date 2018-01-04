import { Component } from "@angular/core";

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    styles: [`
        .online {
            color: white;
        }
    `]
})
export class ServerComponent {
    _serverId: number = 10;
    _serverStatus: string = 'offline' ;

    constructor() {
        this._serverStatus = Math.random() > 0.5 ? 'offline' : 'online'
    }

    getServerId(): number {
        return this._serverId;
    }

    getServerStatus(): string {
        return this._serverStatus;
    }

    getColor() {
        return this._serverStatus === 'online' ? 'green' : 'red';
    }
}