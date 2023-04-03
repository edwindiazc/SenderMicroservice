import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { EmailModule } from './email/email.module';
import { CallsModule } from './calls/calls.module';
import { NotificationModule } from './notification/notification.module';

import { AppController } from './app.controller';

import { AppService } from './app.service';

@Module({
  imports: [
    ConfigModule.forRoot(),
    EmailModule,
    NotificationModule,
    CallsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
