import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CategoryEntity } from './category.entity';
import { CategoryService } from './category.service';

@ApiTags('Категория блюд')
@Controller('category')
export class CategoryController {
  constructor(private categoryService: CategoryService) {}

  @ApiOperation({summary: 'Получение всех категорий блюд'})
  @ApiResponse({status: 200, type: [CategoryEntity]})
  @Get()
  getAll(){
    return this.categoryService.getAllCategory()
  }
}
