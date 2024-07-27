import { Injectable } from '@nestjs/common';
import { PrismaService } from '../database/prisma.service';
import { CreateBasketDto } from './dto/create-basket';

@Injectable()
export class BasketService {
  constructor(private prisma: PrismaService) {}

  async createBasket(dto: CreateBasketDto){
    return this.prisma.basket.create({
      data: dto
    })
  }

  async getBasketByUserId(userId: number){
    return this.prisma.basket.findMany({where: { userId }})
  }

  async removeBasketById(id: number){
    return this.prisma.basket.delete({where: { id }})
  }

  async updateBasketById(id: number, dto: CreateBasketDto){
    return this.prisma.basket.update({
      where: {id},
      data: dto
    })
  }
}
