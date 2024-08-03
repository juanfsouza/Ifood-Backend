import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsString, IsEmail, MinLength, IsOptional } from 'class-validator';

export class UpdateCustomerDto {
  @ApiPropertyOptional({ example: 'Julian', description: 'The updated name of the customer' })
  @IsString()
  @IsOptional()
  name?: string;

  @ApiPropertyOptional({ example: 'julian@example.com', description: 'The updated email of the customer' })
  @IsEmail()
  @IsOptional()
  email?: string;

  @ApiPropertyOptional({ example: 'newpassword', description: 'The updated password of the customer' })
  @IsString()
  @MinLength(6)
  @IsOptional()
  password?: string;
  
}
