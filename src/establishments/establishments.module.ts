import { Module } from '@nestjs/common';
import { EstablishmentsController } from './establishments.controller';
import { EstablishmentsService } from './establishments.service';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [EstablishmentsController],
  providers: [EstablishmentsService, PrismaService]
})
export class EstablishmentsModule {}
