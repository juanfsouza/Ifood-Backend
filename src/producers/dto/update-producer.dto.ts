import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsString, IsEmail, MinLength, IsOptional } from 'class-validator';

export class UpdateProducerDto {
  @ApiPropertyOptional({ example: 'Producer Name', description: 'The name of the producer' })
  @IsString()
  @IsOptional()
  name?: string;

  @ApiPropertyOptional({ example: 'producer@example.com', description: 'The email of the producer' })
  @IsEmail()
  @IsOptional()
  email?: string;

  @ApiPropertyOptional({ example: 'password', description: 'The password of the producer' })
  @IsString()
  @MinLength(6)
  @IsOptional()
  password?: string;
}
