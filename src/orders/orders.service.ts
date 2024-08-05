import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';

@Injectable()
export class OrdersService {
  constructor(private prisma: PrismaService) {}

  async create(createOrderDto: CreateOrderDto) {
    const { customerId, productIds } = createOrderDto;

    // Obtenha os preços dos produtos
    const products = await this.prisma.product.findMany({
      where: {
        id: { in: productIds },
      },
    });

    // Calcule o totalPrice com base nos preços dos produtos
    const totalPrice = products.reduce((sum, product) => sum + product.price, 0);

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

  async update(id: number, updateOrderDto: UpdateOrderDto) {
    const { customerId, productIds, totalPrice } = updateOrderDto;

    // Calcule o totalPrice se ele não for fornecido
    const calculatedTotalPrice = productIds ? await this.calculateTotalPrice(productIds) : totalPrice;

    return this.prisma.order.update({
      where: { id },
      data: {
        customerId,
        totalPrice: calculatedTotalPrice,
        products: productIds ? {
          set: productIds.map(id => ({ id })),
        } : undefined,
      },
      include: {
        products: true,
      },
    });
  }

  async remove(id: number) {
    return this.prisma.order.delete({
      where: { id },
    });
  }

  private async calculateTotalPrice(productIds: number[]): Promise<number> {
    const products = await this.prisma.product.findMany({
      where: {
        id: { in: productIds },
      },
    });

    return products.reduce((sum, product) => sum + product.price, 0);
  }
}
