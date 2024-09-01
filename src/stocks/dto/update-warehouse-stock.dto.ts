import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsPositive } from 'class-validator';

export class UpdateWarehouseStockDto {
  @ApiProperty()
  @IsNumber()
  @IsPositive()
  quantity: number;
}
