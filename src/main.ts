import { NestFactory } from '@nestjs/core';
import { ValidationError, ValidationPipe, } from '@nestjs/common';
import { Transport, RpcException } from '@nestjs/microservices';

import { AppModule } from './app.module';

async function bootstrap() {

  const app = await NestFactory.create(AppModule);

  await app.connectMicroservice(
    {
      transport: Transport.RMQ,
      options: {
        urls: ['amqp://localhost:5672'],
        queue: 'sender_queue',
        queueOptions: {
          durable: false
        },
      },
    }
  );

  await app.connectMicroservice(
    {
      transport: Transport.RMQ,
      options: {
        urls: ['amqp://localhost:5672'],
        queue: 'notifier_queue',
        queueOptions: {
          durable: false
        },
      },
    }
  );

  await app.connectMicroservice(
    {
      transport: Transport.RMQ,
      options: {
        urls: ['amqp://localhost:5672'],
        queue: 'caller_queue',
        queueOptions: {
          durable: false
        },
      },
    }
  );

  await app.startAllMicroservices();
  
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
  await app.listen(3001);
}
bootstrap();
