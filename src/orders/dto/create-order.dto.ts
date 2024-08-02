import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsArray, MinLength } from 'class-validator';

export class CreateOrderDto {

  @ApiProperty({ example: '1', description: 'Number Id Customer' })
  @IsNumber()
  customerId: number;

  @ApiProperty({ example: '1, 2, 3', description: 'Number products Ids' })
  @IsArray()
  productIds: number[];

  @ApiProperty({ example: '10,00', description: 'Value of product' })
  @IsNumber()
  @MinLength(6)
  totalPrice: number;
  
}
