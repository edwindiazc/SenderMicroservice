import { Injectable } from '@nestjs/common';
import { EmailDto } from './dto/email.dto';

@Injectable()
export class EmailService {
  sendEmail(emailDto: EmailDto) {
    console.log('called');
    return 'This action adds a new email';
  }  
}
