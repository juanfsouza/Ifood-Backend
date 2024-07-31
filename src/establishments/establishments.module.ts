import { Module } from '@nestjs/common';
import { EstablishmentsController } from './establishments.controller';
import { EstablishmentsService } from './establishments.service';

@Module({
  controllers: [EstablishmentsController],
  providers: [EstablishmentsService]
})
export class EstablishmentsModule {}
