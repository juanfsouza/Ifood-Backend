import { Test, TestingModule } from '@nestjs/testing';
import { CouponsController } from './coupons.controller';
import { CouponsService } from './coupons.service';
import { PrismaService } from '../prisma/prisma.service';

describe('CouponsController', () => {
  let controller: CouponsController;
  let module: TestingModule;

  beforeEach(async () => {
    module = await Test.createTestingModule({
      controllers: [CouponsController],
      providers: [CouponsService, PrismaService],
    }).compile();

    controller = module.get<CouponsController>(CouponsController);
  });

  afterEach(async () => {
    await module.close();  // Fechar o módulo após cada teste
  });

  afterAll(async () => {
    await new Promise<void>((resolve) => setTimeout(() => resolve(), 1000));  // Esperar um pouco para garantir que todos os processos sejam encerrados
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
