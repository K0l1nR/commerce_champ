import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateStoreStockDto } from './dto/create-store-stock.dto';
import { CreateWarehouseStockDto } from './dto/create-warehouse-stock.dto';

@Injectable()
export class StocksService {
  constructor(private readonly prisma: PrismaService) {}

  async createStoreStock(data: CreateStoreStockDto) {
    return this.prisma.storeStock.create({
      data,
    });
  }

  async createWarehouseStock(data: CreateWarehouseStockDto) {
    return this.prisma.warehouseStock.create({
      data,
    });
  }

  async updateStoreStock(id: number, quantity: number) {
    return this.prisma.storeStock.update({
      where: { id },
      data: { quantity },
    });
  }

  async updateWarehouseStock(id: number, quantity: number) {
    return this.prisma.warehouseStock.update({
      where: { id },
      data: { quantity },
    });
  }
}
