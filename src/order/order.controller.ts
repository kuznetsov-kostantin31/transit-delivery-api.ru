import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { OrderService } from './order.service';
import { CreateOrderDto } from './dto/create-order';
import { OrderEntity } from './order.entity';

@ApiTags('Заказ')
@Controller('order')
export class OrderController {
  constructor(private orderService: OrderService) {}

  @ApiOperation({summary: 'Создание заказа'})
  @ApiResponse({status: 200, type: OrderEntity})
  @Post()
  create(@Body() userDto: CreateOrderDto){
    return this.orderService.createOrder(userDto)
  }

  @ApiOperation({summary: 'Получение заказа по айди корзины пользователя'})
  @ApiResponse({status: 200, type: [OrderEntity]})
  @Get('/:id')
  getById(@Param('id') id: number){
    return this.orderService.getOrdersByUserId(+id)
  }

  @ApiOperation({summary: 'Удаление заказа по айди'})
  @ApiResponse({status: 200, type: OrderEntity})
  @Delete('/:id')
  removeById(@Param('id') id: number){
    return this.orderService.removeOrderById(+id)
  }

  @ApiOperation({summary: 'Обновление заказа по айди'})
  @ApiResponse({status: 200, type: OrderEntity})
  @Patch('/:id')
  updateById(@Param('id') id: number, @Body() dto: CreateOrderDto){
    return this.orderService.updateOrderById(+id, dto)
  }
}

