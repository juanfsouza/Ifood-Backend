import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsString, IsNumber, IsOptional } from 'class-validator';

export class UpdateReviewDto {
  @ApiPropertyOptional({ example: 5, description: 'The rating given by the customer' })
  @IsNumber()
  @IsOptional()
  rating?: number;

  @ApiPropertyOptional({ example: 'Great product!', description: 'Comment about the product' })
  @IsString()
  @IsOptional()
  comment?: string;

  @ApiPropertyOptional({ example: 1, description: 'The ID of the customer who is creating the review' })
  @IsNumber()
  @IsOptional()
  customerId?: number;

  @ApiPropertyOptional({ example: 1, description: 'The ID of the product being reviewed' })
  @IsNumber()
  @IsOptional()
  productId?: number;
}
