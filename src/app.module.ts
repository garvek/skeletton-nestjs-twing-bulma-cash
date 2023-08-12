import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TwingService } from './twing/twing.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, TwingService],
})
export class AppModule {}
