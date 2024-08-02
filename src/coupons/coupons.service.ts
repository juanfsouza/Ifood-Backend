import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateCouponDto } from './dto/create-coupon.dto';

@Injectable()
export class CouponsService {
  constructor(private prisma: PrismaService) {}

  async create(createCouponDto: CreateCouponDto) {
    return this.prisma.coupon.create({
      data: createCouponDto,
    });
  }

  async findAll() {
    return this.prisma.coupon.findMany();
  }

  async findOne(id: number) {
    return this.prisma.coupon.findUnique({
      where: { id },
    });
  }

  async remove(id: number) {
    return this.prisma.coupon.delete({
      where: { id },
    });
  }
}