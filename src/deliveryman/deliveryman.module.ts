import { Module } from '@nestjs/common';
import { DeliverymanController } from './deliveryman.controller';
import { DeliverymanService } from './deliveryman.service';
import { DatabaseModule } from '../database/database.module';

@Module({
  controllers: [DeliverymanController],
  providers: [DeliverymanService],
  imports: [DatabaseModule]
})
export class DeliverymanModule {}
