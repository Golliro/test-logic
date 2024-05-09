import { Injectable } from '@nestjs/common';
import { StringSufflingsDto } from './app.dto';
import { checkSmileFaceProblem } from './Problems/4-smile-face';
import { stringSufflingsProblem } from './Problems/2-string-sufflings';
import { intOddAppearProblem } from './Problems/3-int-odd-appear';
@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  stringSufflings(stringSufflingsDto: StringSufflingsDto) {
    return stringSufflingsProblem(stringSufflingsDto.array_string);
  }
  intOddAppear(arr: number[]): number {
    return intOddAppearProblem(arr);
  }
  checkSmileFace(arr: string[]): number {
    return checkSmileFaceProblem(arr);
  }
}
