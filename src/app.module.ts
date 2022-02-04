import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { AppController } from './app.controller';
import { AppGateWay } from './gateway/gateway';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, AppGateWay],
})
export class AppModule {}
