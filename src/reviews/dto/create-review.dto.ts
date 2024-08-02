import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNumber } from 'class-validator';

export class CreateReviewDto {
  @ApiProperty({ example: 5, description: 'The rating given by the customer' })
  @IsString()
  rating: number;

  @ApiProperty({ example: 'Great product!', description: 'Comment about the product' })
  @IsString()
  comment?: string;

  @ApiProperty({ example: 1, description: 'The ID of the customer who is creating the review' })
  @IsNumber()
  customerId: number;

  @ApiProperty({ example: 1, description: 'The ID of the product being reviewed' })
  @IsNumber()
  productId: number;
}
