import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsString, IsDateString, IsNumber, IsOptional, IsInt } from 'class-validator';

export class UpdateCouponDto {
  @ApiPropertyOptional({ example: 'COUPON2024', description: 'The updated code of the coupon' })
  @IsString()
  @IsOptional()
  code?: string;

  @ApiPropertyOptional({ example: 10.00, description: 'The updated discount value of the coupon' })
  @IsNumber()
  @IsOptional()
  discount?: number;

  @ApiPropertyOptional({ example: '2024-08-21T00:00:00Z', description: 'The updated expiration date of the coupon' })
  @IsDateString()
  @IsOptional()
  expiresAt?: string;

  @ApiPropertyOptional({ example: 1, description: 'The updated ID of the product associated with the coupon' })
  @IsOptional()
  @IsInt()
  productId?: number;
}
