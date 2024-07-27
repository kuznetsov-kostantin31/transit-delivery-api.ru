import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { BasketService } from './basket.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateBasketDto } from './dto/create-basket';
import { BasketEntity } from './basket.entity';

@ApiTags('Корзина')
@Controller('basket')
export class BasketController {
  constructor(private basketService: BasketService) {}

  @ApiOperation({summary: 'Создание корзины'})
  @ApiResponse({status: 200, type: BasketEntity})
  @Post()
  create(@Body() dto: CreateBasketDto){
    return this.basketService.createBasket(dto)
  }

  @ApiOperation({summary: 'Получение корзины по айди пользователя'})
  @ApiResponse({status: 200, type: [BasketEntity]})
  @Get('/:userId')
  getBasketById(@Param('userId') userId: number){
    return this.basketService.getBasketByUserId(+userId)
  }

  @ApiOperation({summary: 'Удаление корзины по айди пользователя'})
  @ApiResponse({status: 200, type: [BasketEntity]})
  @Delete('/:id')
  removeById(@Param('id') id: number){
    return this.basketService.removeBasketById(+id)
  }

  @ApiOperation({summary: 'Обновление доставщика по айди'})
  @ApiResponse({status: 200, type: BasketEntity})
  @Patch('/:id')
  updateById(@Param('id') id: number, @Body() dto: CreateBasketDto){
    return this.basketService.updateBasketById(+id, dto)
  }
}
