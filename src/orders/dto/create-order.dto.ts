import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsArray, Min } from 'class-validator';

export class CreateOrderDto {
  @ApiProperty({ example: 1, description: 'The ID of the customer placing the order' })
  @IsNumber()
  customerId: number;

  @ApiProperty({ example: [1, 2, 3], description: 'The IDs of the products in the order' })
  @IsArray()
  @IsNumber({}, { each: true })
  productIds: number[];

}
