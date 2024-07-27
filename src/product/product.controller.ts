import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ProductService } from './product.service';
import { CreateAndUpdateProductDto } from './dto/create-update-product';
import { ProductEntity } from './product.entity';

@ApiTags('Блюда')
@Controller('product')
export class ProductController {
  constructor(private productService: ProductService) {}

  @ApiOperation({summary: 'Создание блюда'})
  @ApiResponse({status: 200, type: ProductEntity})
  @Post()
  create(@Body() dto: CreateAndUpdateProductDto){
    return this.productService.createProduct(dto)
  }

  @ApiOperation({summary: 'Получение всех блюд определенной категории'})
  @ApiResponse({status: 200, type: [ProductEntity]})
  @Get('/:categoryId')
  getAllByCategory(@Param('categoryId') categoryId: number){
    return this.productService.getAllProductsByCategory(+categoryId)
  }

  @ApiOperation({summary: 'Удаление блюда по айди'})
  @ApiResponse({status: 200, type: ProductEntity})
  @Delete('/:id')
  removeById(@Param('id') id: number){
    return this.productService.removeProductById(+id)
  }

  @ApiOperation({summary: 'Обновление блюда по айди'})
  @ApiResponse({status: 200, type: ProductEntity})
  @Patch('/:id')
  updateById(@Param('id') id: number, @Body() dto: CreateAndUpdateProductDto){
    return this.productService.updateProductById(+id, dto)
  }
}
