import { ApiProperty } from '@nestjs/swagger';

export class CategoryEntity{
  @ApiProperty({example: '1', description: 'Айди'})
  id: number

  @ApiProperty({example: 'Горячее', description: 'Название категории'})
  name: string;
}