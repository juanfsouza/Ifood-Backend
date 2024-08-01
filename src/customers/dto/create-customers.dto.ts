import { ApiProperty } from '@nestjs/swagger';

export class CreateCustomersDto {
  @ApiProperty({ example: 'Name', description: 'The your name' })
  name: string;

  @ApiProperty({ example: 'producer@example.com', description: 'The your email' })
  email: string;

  @ApiProperty({ example: 'password', description: 'The your password' })
  password: string;
}
