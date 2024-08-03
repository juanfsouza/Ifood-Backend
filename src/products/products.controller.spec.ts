import { Test, TestingModule } from '@nestjs/testing';
import { PrismaService } from '../prisma/prisma.service';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';

describe('ProductsController', () => {
  let controller: ProductsController;
  let module: TestingModule;

  beforeEach(async () => {
    module = await Test.createTestingModule({
      controllers: [ProductsController],
      providers: [ProductsService, PrismaService],
    }).compile();

    controller = module.get<ProductsController>(ProductsController);
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
