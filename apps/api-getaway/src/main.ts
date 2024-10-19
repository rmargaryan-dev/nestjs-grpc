import { HttpAdapterHost, NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { GlobalExceptionFilter, RpcExceptionFilter } from '@app/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalFilters(
    new GlobalExceptionFilter(app.get(HttpAdapterHost)),
    new RpcExceptionFilter(),
  );
  console.log(111111);
  await app.listen(3000);
}

bootstrap();
