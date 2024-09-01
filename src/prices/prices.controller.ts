import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { PricesService } from './prices.service';
import { CreatePriceDto } from './dto/create-price.dto';
import { UpdatePriceDto } from './dto/update-price.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('prices')
@ApiTags('Price')
export class PricesController {
  constructor(private readonly pricesService: PricesService) {}

  @Post()
  create(@Body() createPriceDto: CreatePriceDto) {
    return this.pricesService.createPrice(createPriceDto);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pricesService.getPrice(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updatePriceDto: UpdatePriceDto) {
    return this.pricesService.updatePrice(+id, updatePriceDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pricesService.deletePrice(+id);
  }
}
