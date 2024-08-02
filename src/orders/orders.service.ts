import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateOrderDto } from './dto/create-order.dto';

@Injectable()
export class OrdersService {
  constructor(private prisma: PrismaService) {}

  async create(createOrderDto: CreateOrderDto) {
    const { customerId, productIds, totalPrice } = createOrderDto;
    return this.prisma.order.create({
      data: {
        customerId,
        totalPrice,
        products: {
          connect: productIds.map(id => ({ id })),
        },
      },
      include: {
        products: true,
      },
    });
  }

  async findAll() {
    return this.prisma.order.findMany({
      include: {
        customer: true,
        products: true,
      },
    });
  }

  async findOne(id: number) {
    return this.prisma.order.findUnique({
      where: { id },
      include: {
        customer: true,
        products: true,
      },
    });
  }

  async remove(id: number) {
    return this.prisma.order.delete({
      where: { id },
    });
  }
}
