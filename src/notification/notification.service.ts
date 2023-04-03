import { Injectable } from '@nestjs/common';
import { NotificationDto } from './dto/notification.dto';

@Injectable()
export class NotificationService {
  notify(notificationDto: NotificationDto) {
    return 'This action adds a new notification';
  }
 
}
