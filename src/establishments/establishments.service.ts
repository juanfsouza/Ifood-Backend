import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateEstablishmentDto } from './dto/create-establishment.dto';
import { UpdateEstablishmentDto } from './dto/update-establishment.dto';

@Injectable()
export class EstablishmentsService {
  removeAll() {
    throw new Error('Method not implemented.');
  }
  constructor(private prisma: PrismaService) {}

  async create(data: CreateEstablishmentDto) {
    return this.prisma.establishment.create({
      data: {
        name: data.name,
        street: data.street,
        city: data.city,
        state: data.state,
        producerId: data.producerId,
      },
    });
  }

  async findAll() {
    return this.prisma.establishment.findMany();
  }

  async findOne(id: number) {
    return this.prisma.establishment.findUnique({ where: { id } });
  }

  async update(id: number, data: Partial<UpdateEstablishmentDto>) {
    return this.prisma.establishment.update({
      where: { id },
      data,
    });
  }

  async remove(id: number) {
    return this.prisma.establishment.delete({ where: { id } });
  }
}
