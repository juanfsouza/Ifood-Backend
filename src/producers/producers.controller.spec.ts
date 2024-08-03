import { Test, TestingModule } from '@nestjs/testing';
import { PrismaService } from '../prisma/prisma.service';
import { ProducersController } from './producers.controller';
import { ProducersService } from './producers.service';

describe('ProducersController', () => {
  let controller: ProducersController;
  let service: ProducersService;
  let module: TestingModule;

  beforeEach(async () => {
    module = await Test.createTestingModule({
      controllers: [ProducersController],
      providers: [
        ProducersService,
        PrismaService,
        {
          provide: ProducersService,
          useValue: {
            findAll: jest.fn().mockResolvedValue([
              { 
                id: 1, 
                name: 'Producer 1', 
                email: 'producer1@example.com', 
                password: 'password1' },
              { 
                id: 2, 
                name: 'Producer 2', 
                email: 'producer2@example.com', 
                password: 'password2' 
              },
            ]),
          },
        },
      ],
    }).compile();

    controller = module.get<ProducersController>(ProducersController);
    service = module.get<ProducersService>(ProducersService);
  });

  afterEach(async () => {
    await module.close();
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should return an array of producers', async () => {
    const result = await controller.findAll();
    expect(result).toEqual([
      { 
        id: 1, 
        name: 'Producer 1', 
        email: 'producer1@example.com', 
        password: 'password1' },
      { 
        id: 2, 
        name: 'Producer 2', 
        email: 'producer2@example.com', 
        password: 'password2' 
      },
    ]);
  });
});
