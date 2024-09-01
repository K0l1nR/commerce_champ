import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateStoreDto } from './dto/create-store.dto';
import { UpdateStoreDto } from './dto/update-store.dto';

@Injectable()
export class StoresService {
  constructor(private readonly prisma: PrismaService) {}

  async createStore(data: CreateStoreDto) {
    return this.prisma.store.create({
      data,
    });
  }

  async getStore(id: number) {
    return this.prisma.store.findUnique({
      where: { id },
      include: {
        stocks: {
          include: {
            product: true,
          },
        },
      },
    });
  }

  async updateStore(id: number, data: UpdateStoreDto) {
    return this.prisma.store.update({
      where: { id },
      data,
    });
  }

  async deleteStore(id: number) {
    return this.prisma.store.delete({
      where: { id },
    });
  }
}
