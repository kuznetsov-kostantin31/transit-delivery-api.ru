import { ApiProperty } from '@nestjs/swagger';


export class DeliverymanEntity{
  @ApiProperty({example: '1', description: 'Айди доставщика'})
  id: number

  @ApiProperty({example: '100', description: 'Заработаная сумма'})
  cash: number;

  @ApiProperty({example: '1', description: 'Айди пользователя'})
  userId: number;
}