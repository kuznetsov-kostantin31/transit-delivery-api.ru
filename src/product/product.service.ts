import { Injectable } from '@nestjs/common';
import { PrismaService } from '../database/prisma.service';
import { CreateAndUpdateProductDto} from './dto/create-update-product';

@Injectable()
export class ProductService {
  constructor(private prisma: PrismaService) {}

  async createProduct(dto: CreateAndUpdateProductDto){
    return this.prisma.product.create({data: dto})
  }

  async getAllProductsByCategory(categoryId: number){
    return this.prisma.product.findMany({where: {categoryId}})
  }

  async removeProductById(id: number){
    return this.prisma.product.delete({where: {id}})
  }

  async updateProductById(id: number, dto: CreateAndUpdateProductDto){
    return this.prisma.product.update({
      where: {id},
      data: dto
    })
  }
}
