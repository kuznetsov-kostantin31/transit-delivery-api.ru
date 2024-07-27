import { Injectable } from '@nestjs/common';
import { PrismaService } from '../database/prisma.service';
import { CreateOrderDto } from './dto/create-order';

@Injectable()
export class OrderService {
  constructor(private prisma: PrismaService) {}

  async createOrder(dto: CreateOrderDto){
    return this.prisma.order.create({data: dto})
  }

  async getOrdersByUserId(basketId: number){
    return this.prisma.order.findMany({where: { basketId }})
  }

  async updateOrderById(id: number, dto: CreateOrderDto){
    return this.prisma.order.update({
      where: {id},
      data: dto
    })
  }

  async removeOrderById(id: number){
    return this.prisma.order.delete({where: { id }})
  }
}
