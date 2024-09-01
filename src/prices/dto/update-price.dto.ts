import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString, IsOptional, IsPositive } from 'class-validator';

export class UpdatePriceDto {
  @ApiProperty()
  @IsNumber()
  @IsOptional()
  @IsPositive()
  amount?: number;

  @ApiProperty()
  @IsString()
  @IsOptional()
  currency?: string;
}
