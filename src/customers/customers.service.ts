import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateCustomerDto } from './dto/create-customers.dto';

@Injectable()
export class CustomersService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateCustomerDto) {
    return this.prisma.customer.create({
      data,
    });
  }

  async findAll() {
    return this.prisma.customer.findMany();
  }

  async findOne(id: number) {
    return this.prisma.customer.findUnique({ where: { id } });
  }

  async update(id: number, data: Partial<CreateCustomerDto>) {
    return this.prisma.customer.update({
      where: { id },
      data,
    });
  }

  async remove(id: number) {
    return this.prisma.customer.delete({ where: { id } });
  }
}
