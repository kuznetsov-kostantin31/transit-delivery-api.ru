import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class CreateAndUpdateProductDto{
  @ApiProperty({example: 'Сырники', description: 'Название блюда'})
  @IsString({message: 'Должно быть строкой'})
  readonly name: string;

  @ApiProperty({example: 'С мёдом, джемом и сгущенкой в ассортименте', description: 'Описание блюда'})
  @IsString({message: 'Должно быть строкой'})
  readonly description: string;

  @ApiProperty({example: '120', description: 'Цена блюда'})
  @IsNumber()
  readonly price: number;

  @ApiProperty({example: '1', description: 'Айди категории'})
  @IsNumber()
  readonly categoryId: number;
}