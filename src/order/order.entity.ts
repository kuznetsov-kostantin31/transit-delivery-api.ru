import { ApiProperty } from '@nestjs/swagger';
import { IsNumber } from 'class-validator';
// @ts-ignore
import { State } from '@prisma/client';


export class OrderEntity {
  @ApiProperty({example: '1', description: 'Айди заказа'})
  id: number

  @ApiProperty({example: '1', description: 'Айди доставщика'})
  @IsNumber()
  deliverymanId: number;

  @ApiProperty({example: '1', description: 'Айди корзины'})
  @IsNumber()
  basketId: number;

  @ApiProperty({example: 'ready', description: 'Готовность заказа'})
  state: State;

  @ApiProperty({example: 'false', description: 'Состояние заказа'})
  isDone: boolean;
}