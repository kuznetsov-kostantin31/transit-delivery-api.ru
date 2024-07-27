import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString, Length } from 'class-validator';

export class CreateAndUpdateUserDto{
  @ApiProperty({example: 'Александр Довжик', description: 'Имя'})
  @IsString({message: 'Должно быть строкой'})
  readonly name: string;

  @ApiProperty({example: '+7 999-999 99 99', description: 'Номер телефона'})
  @IsString({message: 'Должно быть строкой'})
  readonly phone: string;

  @ApiProperty({example: 'ул. Пушкинская, д. 7', description: 'Адрес'})
  @IsString({message: 'Должно быть строкой'})
  readonly address: string;

  @ApiProperty({example: '4848 5000 0000 0000', description: 'Номер карты'})
  @IsString({message: 'Должно быть строкой'})
  @Length(16, 16, {message: 'Должно быть 16 символов'})
  readonly card_num: string;

  @ApiProperty({example: '09/34', description: 'Дата срока карты'})
  @IsString({message: 'Должно быть строкой'})
  @Length(5, 5, {message: 'Должно быть 5 символов'})
  readonly card_date: string;

  @ApiProperty({example: '333', description: 'Cvc карты'})
  @IsNumber()
  @Length(3, 3, {message: 'Должно быть 3 символов'})
  readonly cvc: number;
}