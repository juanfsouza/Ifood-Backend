import { ApiProperty } from '@nestjs/swagger';

export class CreateEstablishmentDto {
  @ApiProperty({ example: 'Restaurant Name', description: 'The name of the establishment' })
  name: string;

  @ApiProperty({ example: '123 Main St', description: 'The street address of the establishment' })
  street: string;

  @ApiProperty({ example: 'City Name', description: 'The city of the establishment' })
  city: string;

  @ApiProperty({ example: 'State Name', description: 'The state of the establishment' })
  state: string;

  @ApiProperty({ example: 'City Name', description: 'The ID of the producer associated with the establishment' })
  producerId: number;
  
}
