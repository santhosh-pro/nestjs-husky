import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    const hello = 'Hello world !!!';
    const name = 'Ky.Smile !!!!!!';
    return hello + name;
  }
}
