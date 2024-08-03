import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateProducerDto } from './dto/create-producer.dto';
import { Producer } from '@prisma/client';

@Injectable()
export class ProducersService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateProducerDto): Promise<Producer> {
    return this.prisma.producer.create({
      data: {
        name: data.name,
        email: data.email,
        password: data.password,
      },
    });
  }

  async findAll(): Promise<Producer[]> {
    return this.prisma.producer.findMany();
  }

  async findOne(id: number): Promise<Producer> {
    const producer = await this.prisma.producer.findUnique({
      where: { id },
    });
    if (!producer) {
      throw new NotFoundException(`Producer with id ${id} not found`);
    }
    return producer;
  }

  async findById(id: number): Promise<Producer> {
    return this.findOne(id);  // Você pode reutilizar findOne
  }

  async update(id: number, data: Partial<CreateProducerDto>): Promise<Producer> {
    const producer = await this.prisma.producer.update({
      where: { id },
      data,
    });
    if (!producer) {
      throw new NotFoundException(`Producer with id ${id} not found`);
    }
    return producer;
  }

  async remove(id: number): Promise<Producer> {
    const producer = await this.prisma.producer.delete({
      where: { id },
    });
    if (!producer) {
      throw new NotFoundException(`Producer with id ${id} not found`);
    }
    return producer;
  }
}
