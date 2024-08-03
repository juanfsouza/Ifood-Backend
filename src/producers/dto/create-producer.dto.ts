import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsEmail, MinLength } from 'class-validator';
export class CreateProducerDto {
  @ApiProperty({ example: 'Producer Name', description: 'The name of the producer' })
  @IsString()
  name: string;

  @ApiProperty({ example: 'producer@example.com', description: 'The email of the producer' })
  @IsEmail()
  email: string;

  @ApiProperty({ example: 'password', description: 'The password of the producer' })
  @IsString()
  @MinLength(6)
  password: string;
}
