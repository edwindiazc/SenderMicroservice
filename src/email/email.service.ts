import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config'
import * as SendGrid from '@sendgrid/mail';


@Injectable()
export class EmailService {
  private readonly fromEmail: string;
  constructor(private readonly configService: ConfigService) {
    SendGrid.setApiKey(this.configService.get<string>('SEND_GRID_KEY'));
    this.fromEmail = this.configService.get<string>('FROM_EMAIL_SEND_GRID')
  }
  async sendEmail(mail: SendGrid.MailDataRequired) {
    mail.from = this.fromEmail;
    const transport = await SendGrid.send(mail);
    console.log(`Email send to ${mail.to}`)
    return transport;
  }
}
