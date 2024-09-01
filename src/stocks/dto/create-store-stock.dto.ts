import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsPositive, IsNotEmpty } from 'class-validator';

export class CreateStoreStockDto {
  @ApiProperty()
  @IsNumber()
  @IsPositive()
  quantity: number;

  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  storeId: number;

  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  productId: number;
}
