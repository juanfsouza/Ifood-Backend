import { Body, Controller, Delete, Get, Param, Put, Post } from '@nestjs/common';
import { CustomersService } from './customers.service';
import { CreateCustomerDto } from './dto/create-customers.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('customers')
@Controller('customers')
export class CustomersController {
    constructor(private readonly customersService: CustomersService) {}

    @Post()
    @ApiOperation({ summary: "Create a producer" })
    @ApiResponse({ status: 200, description: 'The producer has been sucessfully created' })
    create(@Body() createCustomersDto: CreateCustomerDto) {
        return this.customersService.create(createCustomersDto);
    }

    @Get()
    @ApiOperation({ summary: 'Get all producers' })
    @ApiResponse({ status: 200, description: 'Return all producers.' })
    findAll() {
        return this.customersService.findAll();
    }

    @Get(':id')
    @ApiOperation({ summary: 'Get a producer by ID' })
    @ApiResponse({ status: 200, description: 'Return the producer.' })
    findOne(@Param('id') id: string) {
        return this.customersService.findOne(+id);
    }

    @Put(':id')
    @ApiOperation({ summary: 'Update a producer by ID' })
    @ApiResponse({ status: 200, description: 'The producer has been successfully updated.' })
    update(@Param('id') id: string, @Body() updateCustomerDto: Partial<CreateCustomerDto>) {
        return this.customersService.update(+id, updateCustomerDto);
    }

    @Delete(':id')
    @ApiOperation({ summary: 'Delete a producer by ID' })
    @ApiResponse({ status: 200, description: 'The producer has been successfully deleted.' })
    remove(@Param('id') id: string) {
        return this.customersService.remove(+id);
    }
}
