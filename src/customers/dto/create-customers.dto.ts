import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsEmail, MinLength } from 'class-validator';

export class CreateCustomerDto {
  @ApiProperty({ example: 'Name', description: 'The your name' })
  @IsString()
  name: string;

  @ApiProperty({ example: 'customer@example.com', description: 'The your email' })
  @IsEmail()
  email: string;

  @ApiProperty({ example: 'password', description: 'The your password' })
  @IsString()
  @MinLength(6)
  password: string;
}
