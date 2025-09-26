import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const openApiConfig = new DocumentBuilder()
    .setTitle('NestJS Quickstart')
    .setDescription('API description goes here')
    .setVersion('1.0')
    .build();
  const documentFactory = () => SwaggerModule.createDocument(app, openApiConfig);

  SwaggerModule.setup('api', app, documentFactory);

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
