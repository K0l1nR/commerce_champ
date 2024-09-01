import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { CategoriesModule } from './categories/categories.module';
import { StoresModule } from './stores/stores.module';
import { PricesModule } from './prices/prices.module';
import { StocksService } from './stocks/stocks.service';
import { StocksController } from './stocks/stocks.controller';
import { StocksModule } from './stocks/stocks.module';
import { PrismaService } from 'prisma/prisma.service';

@Module({
  imports: [ProductsModule, CategoriesModule, StoresModule, PricesModule, StocksModule],
  controllers: [AppController, StocksController],
  providers: [AppService, StocksService, PrismaService],
})
export class AppModule {}
