import { Body, Controller, Post } from '@nestjs/common';
import { SayNameDto } from 'src/dto/sayname.dto';
import { SaynameService } from './sayname.service';

@Controller('/sayname')
export class SaynameController {
    constructor(private readonly saynameService: SaynameService){}
    
    @Post()
    sayName(@Body() body: SayNameDto){
        return this.saynameService.sayName(body.name);
    }
}
