import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

    // Enable CORS
  app.enableCors({
    origin: 'localhost:3000',
  });
  
  await app.listen(3000);
}
bootstrap();
