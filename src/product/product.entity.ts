import { ApiProperty } from '@nestjs/swagger';


export class ProductEntity{
  @ApiProperty({example: '1', description: 'Айди'})
  id: number

  @ApiProperty({example: 'Сырники', description: 'Название блюда'})
  name: string;

  @ApiProperty({example: 'С мёдом, джемом и сгущенкой в ассортименте', description: 'Описание блюда'})
  description: string;

  @ApiProperty({example: '120', description: 'Цена блюда'})
  price: number;

  @ApiProperty({example: '1', description: 'Айди категории'})
  categoryId: number;
}