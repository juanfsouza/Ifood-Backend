import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsDateString, IsNumber, IsOptional } from 'class-validator';

export class CreateCouponDto {
  @ApiProperty({ example: 'Coupon get 10.00 off', description: 'The code of the coupon' })
  @IsString()
  code: string;

  @ApiProperty({ example: 10.00, description: 'The discount value of the coupon' })
  @IsNumber()
  discount: number;

  @ApiProperty({ example: '2024-08-21T00:00:00Z', description: 'The expiration date of the coupon' })
  @IsDateString()
  expiresAt: string;

  @ApiProperty({ example: 1, description: 'The ID of the product associated with the coupon', required: false })
  @IsOptional()
  @IsNumber()
  productId?: number;
}
