import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { EstablishmentsService } from './establishments.service';
import { CreateEstablishmentDto } from './dto/create-establishment.dto';
import { UpdateEstablishmentDto } from './dto/update-establishment.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('establishments')
@Controller('establishments')
export class EstablishmentsController {
  constructor(private readonly establishmentsService: EstablishmentsService) {}

  @Post()
  @ApiOperation({ summary: 'Create an establishment' })
  @ApiResponse({ status: 201, description: 'The establishment has been successfully created.' })
  create(@Body() createEstablishmentDto: CreateEstablishmentDto) {
    return this.establishmentsService.create(createEstablishmentDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all establishments' })
  @ApiResponse({ status: 200, description: 'Return all establishments.' })
  findAll() {
    return this.establishmentsService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get an establishment by ID' })
  @ApiResponse({ status: 200, description: 'Return the establishment.' })
  findOne(@Param('id') id: string) {
    return this.establishmentsService.findOne(+id);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update an establishment by ID' })
  @ApiResponse({ status: 200, description: 'The establishment has been successfully updated.' })
  update(@Param('id') id: string, @Body() updateEstablishmentDto: UpdateEstablishmentDto) {
    return this.establishmentsService.update(+id, updateEstablishmentDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete an establishment by ID' })
  @ApiResponse({ status: 200, description: 'The establishment has been successfully deleted.' })
  remove(@Param('id') id: string) {
    return this.establishmentsService.remove(+id);
  }
}
