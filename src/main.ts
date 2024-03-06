import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { BadRequestException, ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
      disableErrorMessages: false,
      exceptionFactory: (errors) => {
        const messages = errors.map(
          (error) => `${Object.values(error.constraints).join('. ')}`,
        );
        return new BadRequestException(messages);
      },
    }),
  );

  await app.listen(3000);
}
bootstrap();
