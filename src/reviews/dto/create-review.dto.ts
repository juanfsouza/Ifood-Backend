import { ApiProperty } from '@nestjs/swagger';

export class CreateReviewDto {
  @ApiProperty({ example: 5, description: 'The rating given by the customer' })
  rating: number;

  @ApiProperty({ example: 'Great product!', description: 'Comment about the product' })
  comment?: string;

  @ApiProperty({ example: 1, description: 'The ID of the customer who is creating the review' })
  customerId: number;

  @ApiProperty({ example: 1, description: 'The ID of the product being reviewed' })
  productId: number;
}
