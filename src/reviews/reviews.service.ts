import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateReviewDto } from './dto/create-review.dto';

@Injectable()
export class ReviewsService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateReviewDto) {
    return this.prisma.review.create({
      data,
    });
  }

  async findAll() {
    return this.prisma.review.findMany();
  }

  async findOne(id: number) {
    return this.prisma.review.findUnique({ where: { id } });
  }

  async update(id: number, data: Partial<CreateReviewDto>) {
    return this.prisma.review.update({
      where: { id },
      data,
    });
  }

  async remove(id: number) {
    return this.prisma.review.delete({ where: { id } });
  }
}
