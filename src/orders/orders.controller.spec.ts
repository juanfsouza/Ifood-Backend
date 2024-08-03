import { Test, TestingModule } from '@nestjs/testing';
import { OrdersController } from './orders.controller';
import { OrdersService } from './orders.service';
import { PrismaService } from '../prisma/prisma.service';

describe('OrdersController', () => {
  let controller: OrdersController;
  let module: TestingModule;

  beforeEach(async () => {
    module = await Test.createTestingModule({
      controllers: [OrdersController],
      providers: [OrdersService, PrismaService],
    }).compile();

    controller = module.get<OrdersController>(OrdersController);
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
