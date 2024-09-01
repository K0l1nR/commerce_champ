import { Controller, Post, Body, Param, Put } from '@nestjs/common';
import { StocksService } from './stocks.service';
import { CreateStoreStockDto } from './dto/create-store-stock.dto';
import { CreateWarehouseStockDto } from './dto/create-warehouse-stock.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('stocks')
@ApiTags('Stocks')
export class StocksController {
  constructor(private readonly stocksService: StocksService) {}

  @Post('store')
  createStoreStock(@Body() createStoreStockDto: CreateStoreStockDto) {
    return this.stocksService.createStoreStock(createStoreStockDto);
  }

  @Post('warehouse')
  createWarehouseStock(@Body() createWarehouseStockDto: CreateWarehouseStockDto) {
    return this.stocksService.createWarehouseStock(createWarehouseStockDto);
  }

  @Put('store/:id')
  updateStoreStock(@Param('id') id: string, @Body('quantity') quantity: number) {
    return this.stocksService.updateStoreStock(+id, quantity);
  }

  @Put('warehouse/:id')
  updateWarehouseStock(@Param('id') id: string, @Body('quantity') quantity: number) {
    return this.stocksService.updateWarehouseStock(+id, quantity);
  }
}
