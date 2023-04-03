import { Injectable } from '@nestjs/common';
import * as Pusher from 'pusher';
import { ConfigService } from '@nestjs/config';
import { NotificationDto } from './dto/notification.dto';

@Injectable()
export class NotificationService {
  pusher: Pusher;

  constructor(private readonly configService: ConfigService) {
    const appId = this.configService.get<string>('APP_ID');
    const key = this.configService.get<string>('KEY');
    const secret = this.configService.get<string>('SECRET');
    const cluster = this.configService.get<string>('CLUSTER');

    this.pusher = new Pusher({
      appId,
      key,
      secret,
      cluster,
      useTLS: true,
    });
  }
  async pushNotification({ channel, event, data }: NotificationDto) {
    return this.pusher.trigger(channel, event, data);
  }

}
