import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { TwingService } from './twing/twing.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly twingService: TwingService,
  ) {}

  @Get()
  getHello(): Promise<string> {
    return this.twingService.render(
      'hello.html.twig',
      this.appService.getHello(),
    );
  }
}
