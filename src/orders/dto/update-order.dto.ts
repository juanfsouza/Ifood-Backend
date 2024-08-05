import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsNumber, IsArray, IsOptional } from 'class-validator';

export class UpdateOrderDto {
  @ApiPropertyOptional({ example: 1, description: 'The ID of the customer' })
  @IsNumber()
  @IsOptional()
  customerId?: number;

  @ApiPropertyOptional({ example: [1, 2, 3], description: 'Array of product IDs' })
  @IsArray()
  @IsOptional()
  productIds?: number[];

  @ApiPropertyOptional({ example: 10.00, description: 'Total price of the order' })
  @IsNumber()
  @IsOptional()
  totalPrice?: number;
}
