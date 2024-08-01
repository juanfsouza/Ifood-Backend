import { ApiProperty } from '@nestjs/swagger';

export class CreateProductDto {
  @ApiProperty({ example: 'Pizza', description: 'The name of the product' })
  name: string;

  @ApiProperty({ example: 'Delicious cheese pizza', description: 'The description of the product' })
  description: string;

  @ApiProperty({ example: 19.99, description: 'The price of the product' })
  price: number;

  @ApiProperty({ example: 1, description: 'The ID of the producer' })
  producerId: number;
}
