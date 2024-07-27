import { Module } from '@nestjs/common';
import { BasketController } from './basket.controller';
import { BasketService } from './basket.service';
import { DatabaseModule } from '../database/database.module';

@Module({
  controllers: [BasketController],
  providers: [BasketService],
  imports: [DatabaseModule],
  exports: [BasketService]
})
export class BasketModule {}
