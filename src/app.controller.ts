import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { AnswerDto } from './dto/app.dto';
import { SumServiceService } from './sum-service/sum-service.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly sumService: SumServiceService
  ) {}

  @Get()
  getHello(@Query('name') username): string {
    return this.appService.getHello(username);
  }

  @Post('/answer')
  answer(@Body() getAnswerDto: AnswerDto){
    return {
      answer: getAnswerDto.answer         
    }
  }

  @Get('/user/:id')
  getUser(@Param('id') userId: string){
    return userId;
  }

  @Get('/sum')
  getSum(@Query('num1') a: string, @Query('num2') b: string){
    return this.sumService.getSum(a, b);
  }
}
