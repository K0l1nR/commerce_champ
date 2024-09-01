import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Injectable()
export class ProductsService {
  constructor(private readonly prisma: PrismaService) {}

  async createProduct(data: CreateProductDto) {
    return this.prisma.product.create({
      data,
    });
  }

  async getProductById(productId: number) {
    return this.prisma.product.findUnique({
      where: { id: productId },
      include: {
        categories: {
          include: {
            category: true, // Загрузка данных о категории
          },
        },
        prices: true, // Загрузка цен продукта
        storeStocks: true, // Загрузка остатков в магазинах
        warehouseStocks: true, // Загрузка остатков на складе
      },
    });
  }

  async updateProduct(id: number, data: UpdateProductDto) {
    return this.prisma.product.update({
      where: { id },
      data,
    });
  }

  async deleteProduct(id: number) {
    return this.prisma.product.delete({
      where: { id },
    });
  }
}
