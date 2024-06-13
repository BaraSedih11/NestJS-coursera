import { Injectable } from '@nestjs/common';

@Injectable()
export class SaynameService {
    sayName(name){
        return `My name is ${name}`;
    }
}
