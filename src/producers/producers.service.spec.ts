import { Test, TestingModule } from '@nestjs/testing';
import { PrismaService } from '../prisma/prisma.service';
import { ProducersService } from './producers.service';

describe('ProducersService', () => {
  let service: ProducersService;
  let module: TestingModule;

  beforeEach(async () => {
    module = await Test.createTestingModule({
      providers: [ProducersService, PrismaService],
    }).compile();

    service = module.get<ProducersService>(ProducersService);
  });

  afterEach(async () => {
    await module.close();
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  // Exemplo de teste para findById
  it('should find a producer by ID', async () => {
    const producer = {
      id: 1,
      name: 'Producer 1',
      email: 'producer1@example.com',
      password: 'password',
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    jest.spyOn(service, 'findById').mockResolvedValue(producer);

    expect(await service.findById(1)).toBe(producer);
  });
});
