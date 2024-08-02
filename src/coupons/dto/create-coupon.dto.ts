import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsDate, IsNumber } from 'class-validator';

export class CreateCouponDto {

  @ApiProperty({ example: 'Coupon get 10.00 off' })
  @IsString()
  code: string;

  @ApiProperty({ example: '10.00 off' })
  @IsNumber()
  discount: number;

  @ApiProperty({ example: 'Until day 21' })
  @IsDate()
  expiresAt: Date;
}
