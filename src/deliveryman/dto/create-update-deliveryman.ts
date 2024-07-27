import { ApiProperty } from '@nestjs/swagger';
import { IsNumber } from 'class-validator';


export class CreateAndUpdateDeliverymanDto{
  @ApiProperty({example: '1', description: 'Айди пользователя'})
  @IsNumber()
  readonly userId: number;

  @ApiProperty({example: '100', description: 'Заработаная сумма'})
  @IsNumber()
  readonly cash: number;
}