import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { CallsService } from './calls.service';
import { CallDto } from './dto/call.dto';

@Controller()
export class CallsController {
  constructor(private readonly callsService: CallsService) {}

  @MessagePattern({cmd:'send-sms'})
  call(@Payload() callDto: CallDto) {
    return this.callsService.call(callDto);
  }

  
}
