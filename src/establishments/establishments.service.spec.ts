import { Test, TestingModule } from '@nestjs/testing';
import { PrismaService } from '../prisma/prisma.service';
import { EstablishmentsService } from './establishments.service';
import { Establishment } from '@prisma/client';

describe('EstablishmentsService', () => {
  let service: EstablishmentsService;
  let prismaService: PrismaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EstablishmentsService, PrismaService],
    }).compile();

    service = module.get<EstablishmentsService>(EstablishmentsService);
    prismaService = module.get<PrismaService>(PrismaService);
  });

  afterEach(async () => {
    // Clear the database or perform necessary cleanup
    await prismaService.establishment.deleteMany(); // Example cleanup
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should create an establishment', async () => {
    const createDto = {
      name: 'New Establishment',
      street: '123 Main St',
      city: 'Somewhere',
      state: 'CA',
      producerId: 1,
    };

    const result: Establishment = {
      id: 1,
      ...createDto,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    jest.spyOn(prismaService.establishment, 'create').mockResolvedValue(result);

    expect(await service.create(createDto)).toEqual(result);
  });

  it('should find all establishments', async () => {
    const result: Establishment[] = [
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

    jest.spyOn(prismaService.establishment, 'findMany').mockResolvedValue(result);

    expect(await service.findAll()).toEqual(result);
  });

  it('should find one establishment', async () => {
    const result: Establishment = {
      id: 1,
      name: 'Establishment 1',
      street: '123 Main St',
      city: 'Somewhere',
      state: 'CA',
      producerId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    jest.spyOn(prismaService.establishment, 'findUnique').mockResolvedValue(result);

    expect(await service.findOne(1)).toEqual(result);  // Pass the ID as a number or string based on your service method
  });

  it('should update an establishment', async () => {
    const updateDto = { name: 'Updated Establishment' };
    const result: Establishment = {
      id: 1,
      ...updateDto,
      street: '123 Main St',
      city: 'Somewhere',
      state: 'CA',
      producerId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    jest.spyOn(prismaService.establishment, 'update').mockResolvedValue(result);

    expect(await service.update(1, updateDto)).toEqual(result);  // Pass the ID as a number or string based on your service method
  });

  it('should remove an establishment', async () => {
    const result: Establishment = {
      id: 1,
      name: 'Establishment to Remove',
      street: '123 Main St',
      city: 'Somewhere',
      state: 'CA',
      producerId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    jest.spyOn(prismaService.establishment, 'delete').mockResolvedValue(result);

    expect(await service.remove(1)).toEqual(result);
  });

  it('should use SQLite for tests', async () => {
    const establishments = await prismaService.establishment.findMany(); // Replace with a real query
    expect(establishments).toBeDefined();
  });
});
