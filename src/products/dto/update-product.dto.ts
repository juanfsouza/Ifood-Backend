import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsString, IsNumber, MinLength, IsOptional } from 'class-validator';

export class UpdateProductDto {
  @ApiPropertyOptional({ example: 'Pizza', description: 'The name of the product' })
  @IsString()
  @IsOptional()
  name?: string;

  @ApiPropertyOptional({ example: 'Delicious cheese pizza', description: 'The description of the product' })
  @IsString()
  @IsOptional()
  description?: string;

  @ApiPropertyOptional({ example: 19.99, description: 'The price of the product' })
  @IsNumber()
  @MinLength(1)
  @IsOptional()
  price?: number;

  @ApiPropertyOptional({ example: 1, description: 'The ID of the producer' })
  @IsNumber()
  @IsOptional()
  producerId?: number;
}
