import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { DeliverymanService } from './deliveryman.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { DeliverymanEntity } from './deliveryman.entity';
import { CreateAndUpdateDeliverymanDto } from './dto/create-update-deliveryman';

@ApiTags('Доставщик')
@Controller('deliveryman')
export class DeliverymanController {
  constructor(private deliverymanService: DeliverymanService) {}

  @ApiOperation({summary: 'Создание доставщика'})
  @ApiResponse({status: 200, type: DeliverymanEntity})
  @Post()
  create(@Body() userDto: CreateAndUpdateDeliverymanDto){
    return this.deliverymanService.createDeliveryman(userDto)
  }

  @ApiOperation({summary: 'Получение доставщика по айди'})
  @ApiResponse({status: 200, type: DeliverymanEntity})
  @Get('/:id')
  getById(@Param('id') id: number){
    return this.deliverymanService.getDeliverymanByUserId(+id)
  }

  @ApiOperation({summary: 'Удаление доставщика по айди'})
  @ApiResponse({status: 200, type: DeliverymanEntity})
  @Delete('/:id')
  removeById(@Param('id') id: number){
    return this.deliverymanService.removeDeliverymanById(+id)
  }

  @ApiOperation({summary: 'Обновление доставщика по айди'})
  @ApiResponse({status: 200, type: DeliverymanEntity})
  @Patch('/:id')
  updateById(@Param('id') id: number, @Body() dto: CreateAndUpdateDeliverymanDto){
    return this.deliverymanService.updateDeliverymanById(+id, dto)
  }
}
