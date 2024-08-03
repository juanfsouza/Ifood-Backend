import { Body, Controller, Delete, Get, Param, Put, Post } from '@nestjs/common';
import { ProducersService } from './producers.service';
import { CreateProducerDto } from './dto/create-producer.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('producers')
@Controller('producers')
export class ProducersController {
    constructor(private readonly producersService: ProducersService) {}

    @Post()
    @ApiOperation({ summary: "Create a producer" })
    @ApiResponse({ status: 200, description: 'The producer has been sucessfully created' })
    create(@Body() createProducerDto: CreateProducerDto) {
        return this.producersService.create(createProducerDto);
    }

    @Get()
    @ApiOperation({ summary: 'Get all producers' })
    @ApiResponse({ status: 200, description: 'Return all producers.' })
    findAll() {
        return this.producersService.findAll();
    }

    @Get(':id')
    @ApiOperation({ summary: 'Get a producer by ID' })
    @ApiResponse({ status: 200, description: 'Return the producer.' })
    findOne(@Param('id') id: string) {
        return this.producersService.findById(+id);
    }

    @Put(':id')
    @ApiOperation({ summary: 'Update a producer by ID' })
    @ApiResponse({ status: 200, description: 'The producer has been successfully updated.' })
    update(@Param('id') id: string, @Body() updateProducerDto: Partial<CreateProducerDto>) {
        return this.producersService.update(+id, updateProducerDto);
    }

    @Delete(':id')
    @ApiOperation({ summary: 'Delete a producer by ID' })
    @ApiResponse({ status: 200, description: 'The producer has been successfully deleted.' })
    remove(@Param('id') id: string) {
        return this.producersService.remove(+id);
    }
}
