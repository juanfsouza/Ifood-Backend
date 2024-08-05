import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNumber, Min } from 'class-validator';

export class CreateProductDto {
  @ApiProperty({ example: 'Pizza', description: 'The name of the product' })
  @IsString()
  name: string;

  @ApiProperty({ example: 'Delicious cheese pizza', description: 'The description of the product' })
  @IsString()
  description: string;

  @ApiProperty({ example: 19.99, description: 'The price of the product' })
  @IsNumber()
  @Min(0)
  price: number;

  @ApiProperty({ example: 1, description: 'The ID of the producer' })
  @IsNumber()
  producerId: number;
}
