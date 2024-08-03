import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString, IsNumber } from 'class-validator';

export class UpdateEstablishmentDto {
  @ApiProperty({ example: 'New Restaurant Name', description: 'The updated name of the establishment', required: false })
  @IsOptional()
  @IsString()
  name?: string;

  @ApiProperty({ example: '456 New St', description: 'The updated street address of the establishment', required: false })
  @IsOptional()
  @IsString()
  street?: string;

  @ApiProperty({ example: 'New City Name', description: 'The updated city of the establishment', required: false })
  @IsOptional()
  @IsString()
  city?: string;

  @ApiProperty({ example: 'New State Name', description: 'The updated state of the establishment', required: false })
  @IsOptional()
  @IsString()
  state?: string;

  @ApiProperty({ example: 2, description: 'The updated ID of the producer associated with the establishment', required: false })
  @IsOptional()
  @IsNumber()
  producerId?: number;
}
