import { ApiProperty } from '@nestjs/swagger';
import { IsNumber } from 'class-validator';
// @ts-ignore
import { State } from '@prisma/client';


export class CreateOrderDto {

  @ApiProperty({example: '1', description: 'Айди доставщика'})
  @IsNumber()
  readonly deliverymanId: number;

  @ApiProperty({example: '1', description: 'Айди корзины'})
  @IsNumber()
  readonly basketId: number;

  @ApiProperty({example: 'ready', description: 'Готовность заказа'})
  readonly state: State;

  @ApiProperty({example: 'false', description: 'Состояние заказа'})
  readonly isDone: boolean;
}