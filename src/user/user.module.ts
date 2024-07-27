import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { DatabaseModule } from '../database/database.module';
import { BasketModule } from '../basket/basket.module';

@Module({
  controllers: [UserController],
  providers: [UserService],
  imports: [
    DatabaseModule,
    BasketModule
  ]
})
export class UserModule {}
