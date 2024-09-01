import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsPositive } from 'class-validator';

export class UpdateStoreStockDto {
  @ApiProperty()
  @IsNumber()
  @IsPositive()
  quantity: number;
}
