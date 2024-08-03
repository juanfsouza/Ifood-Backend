import { Test, TestingModule } from '@nestjs/testing';
import { PrismaService } from '../prisma/prisma.service';
import { ProducersService } from './producers.service';
import { ProducersController } from './producers.controller';
import { CreateProducerDto } from './dto/create-producer.dto';

describe('ProducersController', () => {
  let controller: ProducersController;
  let service: ProducersService;
  let module: TestingModule;

  beforeEach(async () => {
    module = await Test.createTestingModule({
      controllers: [ProducersController],
      providers: [ProducersService, PrismaService],
    }).compile();

    controller = module.get<ProducersController>(ProducersController);
    service = module.get<ProducersService>(ProducersService);
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

  it('should return an array of producers', async () => {
    const result = [
      {
        id: 1,
        name: 'Producer 1',
        email: 'producer1@example.com',
        password: 'password1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        name: 'Producer 2',
        email: 'producer2@example.com',
        password: 'password2',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];

    jest.spyOn(service, 'findAll').mockImplementation(async () => result);

    expect(await controller.findAll()).toBe(result);
  });

  it('should create a producer', async () => {
    const createProducerDto: CreateProducerDto = {
      name: 'New Producer',
      email: 'newproducer@example.com',
      password: 'newpassword',
    };

    const result = {
      id: 3,
      name: 'New Producer',
      email: 'newproducer@example.com',
      password: 'newpassword',
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    jest.spyOn(service, 'create').mockImplementation(async () => result);

    expect(await controller.create(createProducerDto)).toBe(result);
  });
});
