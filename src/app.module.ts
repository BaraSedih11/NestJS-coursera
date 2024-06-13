import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SumServiceService } from './sum-service/sum-service.service';
import { SaynameController } from './sayname/sayname.controller';
import { SaynameService } from './sayname/sayname.service';
import { SaynameModule } from './sayname/sayname.module';
import { AuthcheckMiddleware } from './middleware/authcheck.middleware';

@Module({
  imports: [SaynameModule],
  controllers: [AppController, SaynameController],
  providers: [AppService, SumServiceService, SaynameService],
})
export class AppModule implements NestModule{
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AuthcheckMiddleware)
      .forRoutes({ path: '*', method: RequestMethod.ALL });
  }
}
