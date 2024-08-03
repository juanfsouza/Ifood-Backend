import { Test, TestingModule } from '@nestjs/testing';
import { PrismaService } from '../prisma/prisma.service';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';

describe('ProductsController', () => {
  let controller: ProductsController;
  let service: ProductsService;
  let module: TestingModule;

  beforeEach(async () => {
    module = await Test.createTestingModule({
      controllers: [ProductsController],
      providers: [ProductsService, PrismaService],
    }).compile();

    controller = module.get<ProductsController>(ProductsController);
    service = module.get<ProductsService>(ProductsService);
  });

  afterEach(async () => {
    await module.close();
  });

  afterAll(async () => {
    await new Promise<void>((resolve) => setTimeout(() => resolve(), 1000));
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should return an array of products', async () => {
    const result = [
      {
        id: 1,
        name: 'Product 1',
        description: 'Description 1',
        price: 100,
        producerId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        name: 'Product 2',
        description: 'Description 2',
        price: 200,
        producerId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];

    jest.spyOn(service, 'findAll').mockImplementation(async () => result);

    expect(await controller.findAll()).toBe(result);
  });

  it('should create a product', async () => {
    const createProductDto: CreateProductDto = {
      name: 'New Product',
      description: 'New Product Description',
      price: 150,
      producerId: 1,
    };

    const result = {
      id: 3,
      name: 'New Product',
      description: 'New Product Description',
      price: 150,
      producerId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    jest.spyOn(service, 'create').mockImplementation(async () => result);

    expect(await controller.create(createProductDto)).toBe(result);
  });
});
