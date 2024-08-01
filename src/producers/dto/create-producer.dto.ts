import { ApiProperty } from '@nestjs/swagger';

export class CreateProducerDto {
  @ApiProperty({ example: 'Producer Name', description: 'The name of the producer' })
  name: string;

  @ApiProperty({ example: 'producer@example.com', description: 'The email of the producer' })
  email: string;

  @ApiProperty({ example: 'password', description: 'The password of the producer' })
  password: string;
}
