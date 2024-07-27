import { Injectable } from '@nestjs/common';
import { PrismaService } from '../database/prisma.service';
import { CreateAndUpdateUserDto } from './dto/create-update-user';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async createUser(dto: CreateAndUpdateUserDto){
    return this.prisma.user.create({ data: dto })
  }

  async getAllUsers(){
    return this.prisma.user.findMany();
  }

  async getUserById(id: number){
    return this.prisma.user.findFirst({where: {id}})
  }

  async removeUserById(id: number){
    return this.prisma.user.delete({where: { id }})
  }
  async updateUserById(id: number, dto: CreateAndUpdateUserDto){
    return this.prisma.user.update({
      where: {id},
      data: dto
    })
  }
}
