import { Module } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';

@Module({
  providers: [
    {
      provide: PrismaService,
      useFactory: () => {
        const prisma = new PrismaService();
        prisma.$connect();
        return prisma;
      },
    },
  ],
  exports: [PrismaService],
})
export class TestDatabaseModule {}