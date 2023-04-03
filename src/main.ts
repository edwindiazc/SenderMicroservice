import { NestFactory } from '@nestjs/core';
import {  ValidationError, ValidationPipe, } from '@nestjs/common';
import { Transport,RpcException } from '@nestjs/microservices';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice(AppModule, {
    transport: Transport.RMQ,
    options: {
      urls: ['amqp://localhost:5672'],
      queue: 'sender_queue',
      queueOptions: {
        durable: false
      },
    },
  });
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transformOptions: {
        enableImplicitConversion: true,
      },
      exceptionFactory: (validationErrors: ValidationError[] = []) => {
        return new RpcException(validationErrors);
      },
    })
  );
  await app.listen();
}
bootstrap();
