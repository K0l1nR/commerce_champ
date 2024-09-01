import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreatePriceDto } from './dto/create-price.dto';
import { UpdatePriceDto } from './dto/update-price.dto';

@Injectable()
export class PricesService {
  constructor(private readonly prisma: PrismaService) {}

  async createPrice(data: CreatePriceDto) {
    return this.prisma.price.create({
      data,
    });
  }

  async getPrice(id: number) {
    return this.prisma.price.findUnique({
      where: { id },
    });
  }

  async updatePrice(id: number, data: UpdatePriceDto) {
    return this.prisma.price.update({
      where: { id },
      data,
    });
  }

  async deletePrice(id: number) {
    return this.prisma.price.delete({
      where: { id },
    });
  }
}
