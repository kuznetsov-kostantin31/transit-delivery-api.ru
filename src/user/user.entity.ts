import { ApiProperty } from '@nestjs/swagger';

export class UserEntity{
  @ApiProperty({example: '1', description: 'Айди'})
  id: number

  @ApiProperty({example: 'Александр Довжик', description: 'Имя'})
  name: string;

  @ApiProperty({example: '+7 999-999 99 99', description: 'Номер телефона'})
  phone: string;

  @ApiProperty({example: 'ул. Пушкинская, д. 7', description: 'Адрес'})
  address: string;

  @ApiProperty({example: '4848 5000 0000 0000', description: 'Номер карты'})
  card_num: string;

  @ApiProperty({example: '09/34', description: 'Дата срока карты'})
  card_date: string;

  @ApiProperty({example: '333', description: 'Cvc карты'})
  cvc: number;
}