import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateCouponDto } from './dto/create-coupon.dto';
import { UpdateCouponDto } from './dto/update-coupon.dto';

@Injectable()
export class CouponsService {
  constructor(private prisma: PrismaService) {}

  async create(createCouponDto: CreateCouponDto) {
    return this.prisma.coupon.create({
      data: {
        code: createCouponDto.code,
        discount: createCouponDto.discount,
        expiresAt: new Date(createCouponDto.expiresAt),
        productId: createCouponDto.productId, // Certifique-se de que isso está correto
      },
    });
  }

  async findAll() {
    return this.prisma.coupon.findMany({
      select: {
        id: true,
        code: true,
        discount: true,
        expiresAt: true,
        product: {
          select: {
            id: true,
            name: true,
          },
        },
      },
    });
  }

  async findOne(id: number) {
    return this.prisma.coupon.findUnique({
      where: { id },
      select: {
        id: true,
        code: true,
        discount: true,
        expiresAt: true,
        product: {
          select: {
            id: true,
            name: true,
          },
        },
      },
    });
  }

  async update(id: number, updateCouponDto: UpdateCouponDto) {
    return this.prisma.coupon.update({
      where: { id },
      data: {
        code: updateCouponDto.code,
        discount: updateCouponDto.discount,
        expiresAt: updateCouponDto.expiresAt ? new Date(updateCouponDto.expiresAt) : undefined,
        productId: updateCouponDto.productId, // Certifique-se de que isso está correto
      },
    });
  }

  async remove(id: number) {
    return this.prisma.coupon.delete({
      where: { id },
    });
  }
}
