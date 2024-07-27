import { ApiProperty } from '@nestjs/swagger';


export class BasketEntity{
  @ApiProperty({example: '1', description: 'Айди корзины'})
  id: number

  @ApiProperty({example: '1', description: 'Айди блюда'})
  productId: number;

  @ApiProperty({example: '1', description: 'Количество блюда'})
  count: number;

  @ApiProperty({example: '1', description: 'Айди пользователя'})
  userId: number;
}