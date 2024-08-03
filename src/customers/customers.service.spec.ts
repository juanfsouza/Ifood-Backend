import { Test, TestingModule } from '@nestjs/testing';
import { CustomersService } from './customers.service';
import { PrismaService } from '../prisma/prisma.service';
import { CreateCustomerDto } from './dto/create-customers.dto';
import { Customer } from '@prisma/client';

describe('CustomersService', () => {
  let service: CustomersService;
  let prismaService: PrismaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CustomersService,
        {
          provide: PrismaService,
          useValue: {
            customer: {
              create: jest.fn(),
              findMany: jest.fn(),
              findUnique: jest.fn(),
              update: jest.fn(),
              delete: jest.fn(),
            },
          },
        },
      ],
    }).compile();

    service = module.get<CustomersService>(CustomersService);
    prismaService = module.get<PrismaService>(PrismaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('create', () => {
    it('should create a customer', async () => {
      const createDto: CreateCustomerDto = {
        name: 'John Doe',
        email: 'john.doe@example.com',
        password: 'password123',
      };

      const result: Customer = {
        id: 1,
        ...createDto,
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      jest.spyOn(prismaService.customer, 'create').mockResolvedValue(result);

      expect(await service.create(createDto)).toEqual(result);
    });
  });

  describe('findAll', () => {
    it('should return all customers', async () => {
      const result: Customer[] = [
        {
          id: 1,
          name: 'John Doe',
          email: 'john.doe@example.com',
          password: 'password123',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ];

      jest.spyOn(prismaService.customer, 'findMany').mockResolvedValue(result);

      expect(await service.findAll()).toEqual(result);
    });
  });

  describe('findOne', () => {
    it('should return a single customer by id', async () => {
      const result: Customer = {
        id: 1,
        name: 'John Doe',
        email: 'john.doe@example.com',
        password: 'password123',
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      jest.spyOn(prismaService.customer, 'findUnique').mockResolvedValue(result);

      expect(await service.findOne(1)).toEqual(result);
    });
  });

  describe('update', () => {
    it('should update a customer', async () => {
      const updateDto = { name: 'Jane Doe' };
      const result: Customer = {
        id: 1,
        ...updateDto,
        email: 'john.doe@example.com',
        password: 'password123',
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      jest.spyOn(prismaService.customer, 'update').mockResolvedValue(result);

      expect(await service.update(1, updateDto)).toEqual(result);
    });
  });

  describe('remove', () => {
    it('should delete a customer', async () => {
      const result: Customer = {
        id: 1,
        name: 'John Doe',
        email: 'john.doe@example.com',
        password: 'password123',
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      jest.spyOn(prismaService.customer, 'delete').mockResolvedValue(result);

      expect(await service.remove(1)).toEqual(result);
    });
  });
});
