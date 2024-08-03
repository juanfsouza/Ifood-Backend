import { Test, TestingModule } from '@nestjs/testing';
import { CustomersController } from './customers.controller';
import { CustomersService } from './customers.service';
import { CreateCustomerDto } from './dto/create-customers.dto';
import { Customer } from '@prisma/client';

describe('CustomersController', () => {
  let controller: CustomersController;
  let service: CustomersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CustomersController],
      providers: [
        {
          provide: CustomersService,
          useValue: {
            create: jest.fn(),
            findAll: jest.fn(),
            findOne: jest.fn(),
            update: jest.fn(),
            remove: jest.fn(),
          },
        },
      ],
    }).compile();

    controller = module.get<CustomersController>(CustomersController);
    service = module.get<CustomersService>(CustomersService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('create', () => {
    it('should create a customer', async () => {
      const createDto: CreateCustomerDto = {
        name: 'Julian',
        email: 'Julian@example.com',
        password: 'password123',
      };

      const result: Customer = {
        id: 1,
        ...createDto,
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      jest.spyOn(service, 'create').mockResolvedValue(result);

      expect(await controller.create(createDto)).toEqual(result);
    });
  });

  describe('findAll', () => {
    it('should return all customers', async () => {
      const result: Customer[] = [
        {
          id: 1,
          name: 'Julian',
          email: 'Julian@example.com',
          password: 'password123',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ];

      jest.spyOn(service, 'findAll').mockResolvedValue(result);

      expect(await controller.findAll()).toEqual(result);
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

      jest.spyOn(service, 'findOne').mockResolvedValue(result);

      expect(await controller.findOne('1')).toEqual(result);
    });
  });

  describe('update', () => {
    it('should update a customer', async () => {
      const updateDto = { name: 'Jane Doe' };
      const result: Customer = {
        id: 1,
        ...updateDto,
        email: 'Julian@example.com',
        password: 'password123',
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      jest.spyOn(service, 'update').mockResolvedValue(result);

      expect(await controller.update('1', updateDto)).toEqual(result);
    });
  });

  describe('remove', () => {
    it('should delete a customer', async () => {
      const result: Customer = {
        id: 1,
        name: 'Julian',
        email: 'Julian.doe@example.com',
        password: 'password123',
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      jest.spyOn(service, 'remove').mockResolvedValue(result);

      expect(await controller.remove('1')).toEqual(result);
    });
  });
});
