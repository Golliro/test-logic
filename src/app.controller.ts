import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { StringSufflingsDto } from './app.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Post('string-sufflings')
  stringSufflings(@Body() stringSufflingsDto: StringSufflingsDto) {
    return this.appService.stringSufflings(stringSufflingsDto);
  }
  @Post('int-odd-appear')
  intOddAppear(@Body() arr: number[]) {
    return this.appService.intOddAppear(arr);
  }
  @Post('check-smile-face')
  checkSmileFace(@Body() arr: string[]) {
    return this.appService.checkSmileFace(arr);
  }
}
