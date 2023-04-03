import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { NotificationService } from './notification.service';
import { NotificationDto } from './dto/notification.dto';

@Controller()
export class NotificationController {
  constructor(private readonly notificationService: NotificationService) {}

  @MessagePattern({cmd:'push-notification'})
  create(@Payload() notificationDto: NotificationDto) {
    return this.notificationService.pushNotification(notificationDto);
  }
}
