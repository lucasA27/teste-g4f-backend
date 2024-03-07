import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { BadRequestException, ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Produtos API')
    .setDescription('API para gerenciamento de produtos')
    .setVersion('1.0')
    .addTag('produtos')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

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
