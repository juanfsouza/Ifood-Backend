import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsString, IsDate, IsNumber, IsOptional } from 'class-validator';

export class UpdateCouponDto {
  @ApiPropertyOptional({ example: 'Coupon get 10.00 off', description: 'The updated code of the coupon' })
  @IsString()
  @IsOptional()
  code?: string;

  @ApiPropertyOptional({ example: '10.00 off', description: 'The updated discount value of the coupon' })
  @IsNumber()
  @IsOptional()
  discount?: number;

  @ApiPropertyOptional({ example: 'Until day 21', description: 'The updated expiration date of the coupon' })
  @IsDate()
  @IsOptional()
  expiresAt?: Date;
}
