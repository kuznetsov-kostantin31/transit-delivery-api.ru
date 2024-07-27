import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { UserService } from './user.service';
import { CreateAndUpdateUserDto } from './dto/create-update-user';
import { UserEntity } from './user.entity';

@ApiTags('Пользователь')
@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @ApiOperation({summary: 'Создание пользователя'})
  @ApiResponse({status: 200, type: UserEntity})
  @Post()
  create(@Body() userDto: CreateAndUpdateUserDto){
    return this.userService.createUser(userDto)
  }

  @ApiOperation({summary: 'Получение всех пользователей'})
  @ApiResponse({status: 200, type: [UserEntity]})
  @Get()
  getAll(){
    return this.userService.getAllUsers()
  }

  @ApiOperation({summary: 'Получение пользователя по айди'})
  @ApiResponse({status: 200, type: UserEntity})
  @Get('/:id')
  getById(@Param('id') id: number){
    return this.userService.getUserById(+id)
  }

  @ApiOperation({summary: 'Удаление пользователя по айди'})
  @ApiResponse({status: 200, type: UserEntity})
  @Delete('/:id')
  removeById(@Param('id') id: number){
    return this.userService.removeUserById(+id)
  }

  @ApiOperation({summary: 'Обновление пользователя по айди'})
  @ApiResponse({status: 200, type: UserEntity})
  @Patch('/:id')
  updateById(@Param('id') id: number, @Body() dto: CreateAndUpdateUserDto){
    return this.userService.updateUserById(+id, dto)
  }
}
