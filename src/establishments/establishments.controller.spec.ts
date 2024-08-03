import { Test, TestingModule } from '@nestjs/testing';
import { EstablishmentsController } from './establishments.controller';
import { EstablishmentsService } from './establishments.service';
import { PrismaService } from '../prisma/prisma.service';
import { CreateEstablishmentDto } from './dto/create-establishment.dto';
import { UpdateEstablishmentDto } from './dto/update-establishment.dto';

describe('EstablishmentsController', () => {
  let controller: EstablishmentsController;
  let service: EstablishmentsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EstablishmentsController],
      providers: [
        {
          provide: EstablishmentsService,
          useValue: {
            create: jest.fn(),
            findAll: jest.fn(),
            findOne: jest.fn(),
            update: jest.fn(),
            remove: jest.fn(),
          },
        },
        PrismaService,
      ],
    }).compile();

    controller = module.get<EstablishmentsController>(EstablishmentsController);
    service = module.get<EstablishmentsService>(EstablishmentsService);
  });

  afterEach(async () => {
    // Clear the database or perform necessary cleanup
    // Optionally, you can use service.removeAll() if implemented
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should create an establishment', async () => {
    const createDto: CreateEstablishmentDto = {
      name: 'New Establishment',
      street: '123 Main St',
      city: 'Somewhere',
      state: 'CA',
      producerId: 1,
    };

    const result = {
      id: 1,
      ...createDto,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    jest.spyOn(service, 'create').mockResolvedValue(result);

    expect(await controller.create(createDto)).toEqual(result);
  });

  it('should find all establishments', async () => {
    const result = [
      {
        id: 1,
        name: 'Establishment 1',
        street: '123 Main St',
        city: 'Somewhere',
        state: 'CA',
        producerId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];

    jest.spyOn(service, 'findAll').mockResolvedValue(result);

    expect(await controller.findAll()).toEqual(result);
  });

  it('should find one establishment', async () => {
    const result = {
      id: 1,
      name: 'Establishment 1',
      street: '123 Main St',
      city: 'Somewhere',
      state: 'CA',
      producerId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    jest.spyOn(service, 'findOne').mockResolvedValue(result);

    expect(await controller.findOne('1')).toEqual(result); // Ensure ID type matches
  });

  it('should update an establishment', async () => {
    const updateDto: UpdateEstablishmentDto = { name: 'Updated Establishment' };
    const result = {
      id: 1,
      name: 'Updated Establishment',
      street: '123 Main St',
      city: 'Somewhere',
      state: 'CA',
      producerId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    jest.spyOn(service, 'update').mockResolvedValue(result);

    expect(await controller.update('1', updateDto)).toEqual(result); // Ensure ID type matches
  });

  it('should remove an establishment', async () => {
    const result = {
      id: 1,
      name: 'Establishment to Remove',
      street: '123 Main St',
      city: 'Somewhere',
      state: 'CA',
      producerId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    jest.spyOn(service, 'remove').mockResolvedValue(result);

    expect(await controller.remove('1')).toEqual(result); // Ensure ID type matches
  });
});
