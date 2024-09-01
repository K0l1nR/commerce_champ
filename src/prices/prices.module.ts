import { Module } from '@nestjs/common';
import { PricesController } from './prices.controller';
import { PricesService } from './prices.service';
import { PrismaService } from 'prisma/prisma.service';

@Module({
  controllers: [PricesController],
  providers: [PricesService, PrismaService]
})
export class PricesModule {}
