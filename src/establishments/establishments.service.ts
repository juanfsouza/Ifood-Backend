import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateEstablishmentDto } from './dto/create-establishment.dto';

@Injectable()
export class EstablishmentsService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateEstablishmentDto) {
    return this.prisma.establishment.create({
      data,
    });
  }

  async findAll() {
    return this.prisma.establishment.findMany();
  }

  async findOne(id: number) {
    return this.prisma.establishment.findUnique({ where: { id } });
  }

  async update(id: number, data: Partial<CreateEstablishmentDto>) {
    return this.prisma.establishment.update({
      where: { id },
      data,
    });
  }

  async remove(id: number) {
    return this.prisma.establishment.delete({ where: { id } });
  }
}
