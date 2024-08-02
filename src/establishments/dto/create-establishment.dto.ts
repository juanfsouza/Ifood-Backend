import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNumber } from 'class-validator';

export class CreateEstablishmentDto {
  @ApiProperty({ example: 'Restaurant Name', description: 'The name of the establishment' })
  @IsString()
  name: string;

  @ApiProperty({ example: '123 Main St', description: 'The street address of the establishment' })
  @IsString()
  street: string;

  @ApiProperty({ example: 'City Name', description: 'The city of the establishment' })
  @IsString()
  city: string;

  @ApiProperty({ example: 'State Name', description: 'The state of the establishment' })
  @IsString()
  state: string;

  @ApiProperty({ example: 'City Name', description: 'The ID of the producer associated with the establishment' })
  @IsString()
  producerId: number;
  
}
