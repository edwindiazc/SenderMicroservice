import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { EmailService } from './email.service';
import { EmailDto } from './dto/email.dto';

@Controller()
export class EmailController {
  constructor(private readonly emailService: EmailService) { }

  @MessagePattern({ cmd: 'send-email' })
  sendEmail(@Payload() emailDto: EmailDto) {
    return this.emailService.sendEmail(emailDto);
  }
}
