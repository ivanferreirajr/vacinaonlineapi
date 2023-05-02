import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import {
  DocumentBuilder,
  SwaggerCustomOptions,
  SwaggerModule,
} from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      errorHttpStatusCode: 422,
      transform: true,
      skipNullProperties: true,
      skipMissingProperties: true,
    }),
  );

  const config = new DocumentBuilder()
    .setTitle('Vacina Online')
    .setDescription('In progress')
    .setVersion('0.1')
    .addBearerAuth()
    .addBasicAuth()
    .build();

  const customOptions: SwaggerCustomOptions = {
    swaggerOptions: {
      persistAuthorization: true,
    },
    customSiteTitle: 'Documentation',
  };

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document, customOptions);

  await app.listen(process.env.PORT || 3000, async () => {
    console.log(`Application is running on: ${await app.getUrl()}`);
  });
}

bootstrap();
