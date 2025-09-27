import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { apiReference } from '@scalar/nestjs-api-reference';

const OpenApiReferenceEndpoint: string = '/api';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const openApiConfig = new DocumentBuilder()
    .setTitle('NestJS Quickstart')
    .setDescription('API description goes here')
    .setVersion('1.0')
    .build();
  const openApiDocument = SwaggerModule.createDocument(app, openApiConfig);

  app.use(
    OpenApiReferenceEndpoint,
    apiReference({
      content: openApiDocument,
    }),
  );

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
