import { Injectable } from '@nestjs/common';
import { PrismaService } from '../database/prisma.service';
import { CreateAndUpdateDeliverymanDto } from './dto/create-update-deliveryman';

@Injectable()
export class DeliverymanService {
  constructor(private prisma: PrismaService) {}

  async createDeliveryman(dto: CreateAndUpdateDeliverymanDto){
    return this.prisma.deliveryman.create({ data: dto })
  }

  async getDeliverymanByUserId(userId: number){
    return this.prisma.deliveryman.findFirst({where: {userId}})
  }

  async updateDeliverymanById(id: number, dto: CreateAndUpdateDeliverymanDto){
    return this.prisma.deliveryman.update({
      where: {id},
      data: dto
    })
  }

  async removeDeliverymanById(id: number){
    return this.prisma.deliveryman.delete({where: { id }})
  }
}
