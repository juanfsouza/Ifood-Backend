import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateProducerDto } from './dto/create-producer.dto';

@Injectable()
export class ProducersService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateProducerDto) {
    return this.prisma.producer.create({
      data: {
        name: data.name,
        email: data.email,
        password: data.password,
      },
    });
  }

  async findAll() {
    return this.prisma.producer.findMany();
  }

  async findOne(id: number) {
    return this.prisma.producer.findUnique({ where: { id } });
  }

  async update(id: number, data: Partial<CreateProducerDto>) {
    return this.prisma.producer.update({
      where: { id },
      data,
    });
  }

  async remove(id: number) {
    return this.prisma.producer.delete({ where: { id } });
  }
}
