import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { EstablishmentsService } from './establishments.service';
import { CreateEstablishmentDto } from './dto/create-establishment.dto';

@Controller('establishments')
export class EstablishmentsController {
  constructor(private readonly establishmentsService: EstablishmentsService) {}

  @Post()
  create(@Body() createEstablishmentDto: CreateEstablishmentDto) {
    return this.establishmentsService.create(createEstablishmentDto);
  }

  @Get()
  findAll() {
    return this.establishmentsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.establishmentsService.findOne(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.establishmentsService.remove(+id);
  }
}
