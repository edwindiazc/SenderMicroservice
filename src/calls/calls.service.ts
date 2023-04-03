import { Injectable } from '@nestjs/common';
import { CallDto } from './dto/call.dto';

@Injectable()
export class CallsService {
  call(callDto: CallDto) {
    return 'This action adds a new call';
  }

  
}
