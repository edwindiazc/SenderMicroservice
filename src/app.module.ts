import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EmailModule } from './email/email.module';
import { NotificationModule } from './notification/notification.module';
import { CallsModule } from './calls/calls.module';
@Module({
  imports: [EmailModule, NotificationModule, CallsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
