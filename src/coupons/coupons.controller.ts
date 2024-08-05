import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { CouponsService } from './coupons.service';
import { CreateCouponDto } from './dto/create-coupon.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
@ApiTags('coupons')
@Controller('coupons')
export class CouponsController {
  constructor(private readonly couponsService: CouponsService) {}

  @Post()
  @ApiOperation({ summary: "Create a coupon" })
  @ApiResponse({ status: 200, description: 'The coupon has been sucessfully created' })
  create(@Body() createCouponDto: CreateCouponDto) {
    return this.couponsService.create(createCouponDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all coupons' })
  @ApiResponse({ status: 200, description: 'Return all coupons.' })
  findAll() {
    return this.couponsService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a coupon by ID' })
  @ApiResponse({ status: 200, description: 'Return the coupon.' })
  findOne(@Param('id') id: string) {
    return this.couponsService.findOne(+id);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a coupons by ID' })
  @ApiResponse({ status: 200, description: 'The coupons has been successfully deleted.' })
  remove(@Param('id') id: string) {
    return this.couponsService.remove(+id);
  }
}
