import {
  ConnectedSocket,
  OnGatewayConnection,
  OnGatewayInit,
  WebSocketGateway,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';

@WebSocketGateway()
export class AppGateWay implements OnGatewayConnection, OnGatewayInit {
  server: Server;
  afterInit(server: Server): any {
    this.server = server;
    GlobalGateway.server = server;
  }

  handleConnection(client: Socket): any {
    try {
      console.log(client.handshake.auth);
      this.server.emit('socket', { title: 'Hello world' });
    } catch (e) {
      console.log(e);
      return false;
    }
  }
}

export class GlobalGateway {
  static server: Server;
}
