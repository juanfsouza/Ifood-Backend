import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsNumber, IsArray, IsOptional, MinLength } from 'class-validator';

export class UpdateOrderDto {
  @ApiPropertyOptional({ example: '1', description: 'Number Id Customer' })
  @IsNumber()
  @IsOptional()
  customerId?: number;

  @ApiPropertyOptional({ example: '1, 2, 3', description: 'Number products Ids' })
  @IsArray()
  @IsOptional()
  productIds?: number[];

  @ApiPropertyOptional({ example: '10,00', description: 'Value of product' })
  @IsNumber()
  @MinLength(6)
  @IsOptional()
  totalPrice?: number;
}
