import { NestFactory } from '@nestjs/core';
import * as process from "node:process";
import {AppModule} from "./app.module";
import {DocumentBuilder, SwaggerModule} from "@nestjs/swagger";

async function startApp() {
  const PORT = process.env.PORT || 5000
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
      .setTitle('TRANSIT-DELIVERY-API.RU')
      .setDescription('Серверная часть Transit-Delivery')
      .setVersion('0.1.0.0')
      .addTag('РАТИЙСКИЙ PRODUCTION')
      .build()
  const document = SwaggerModule.createDocument(app, config)
  SwaggerModule.setup('/api/docs', app, document)

  await app.listen(PORT, () => console.log(`Server started on port = ${PORT}`));
}

startApp();
