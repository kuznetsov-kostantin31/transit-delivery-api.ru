import { ApiProperty } from '@nestjs/swagger';
import { IsNumber } from 'class-validator';


export class CreateBasketDto{
  @ApiProperty({example: '1', description: 'Айди блюда'})
  @IsNumber()
  readonly productId: number;

  @ApiProperty({example: '1', description: 'Количество блюда'})
  @IsNumber()
  readonly count: number;

  @ApiProperty({example: '1', description: 'Айди пользователя'})
  @IsNumber()
  readonly userId: number;
}