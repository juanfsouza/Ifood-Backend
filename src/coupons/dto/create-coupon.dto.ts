import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsDate, IsNumber } from 'class-validator';

export class CreateCouponDto {

  @ApiProperty({ example: 'Coupon get 10.00 off', description: 'The updated code of the coupon' })
  @IsString()
  code: string;

  @ApiProperty({ example: '10.00 off', description: 'The updated discount value of the coupon' })
  @IsNumber()
  discount: number;

  @ApiProperty({ example: 'Until day 21', description: 'The updated expiration date of the coupon' })
  @IsDate()
  expiresAt: Date;
}
