import { Test, TestingModule } from '@nestjs/testing';
import { PrismaService } from '../prisma/prisma.service';
import { EstablishmentsService } from './establishments.service';

describe('EstablishmentsService (integration)', () => {
  let service: EstablishmentsService;
  let prismaService: PrismaService;
  let module: TestingModule;

  beforeAll(async () => {
    module = await Test.createTestingModule({
      providers: [EstablishmentsService, PrismaService],
    }).compile();

    service = module.get<EstablishmentsService>(EstablishmentsService);
    prismaService = module.get<PrismaService>(PrismaService);

    // Configuração inicial ou limpeza do banco de dados
  });

  afterAll(async () => {
    // Fechar a conexão com o banco de dados e limpar os dados
    await prismaService.$disconnect();
  });

  beforeEach(async () => {
    // Preparar o ambiente de teste
    await prismaService.establishment.deleteMany({});
  });

  it('should create an establishment', async () => {
    const createEstablishmentDto = {
      name: 'Test Establishment',
      street: '123 Test St',
      city: 'Test City',
      state: 'TS',
      producerId: 1,
    };

    const establishment = await service.create(createEstablishmentDto);

    expect(establishment).toHaveProperty('id');
    expect(establishment.name).toBe(createEstablishmentDto.name);
  });

  it('should find an establishment by ID', async () => {
    const createEstablishmentDto = {
      name: 'Test Establishment',
      street: '123 Test St',
      city: 'Test City',
      state: 'TS',
      producerId: 1,
    };

    const createdEstablishment = await service.create(createEstablishmentDto);
    const foundEstablishment = await service.findOne(createdEstablishment.id);

    expect(foundEstablishment).toEqual(createdEstablishment);
  });

  it('should update an establishment', async () => {
    const createEstablishmentDto = {
      name: 'Test Establishment',
      street: '123 Test St',
      city: 'Test City',
      state: 'TS',
      producerId: 1,
    };

    const createdEstablishment = await service.create(createEstablishmentDto);

    const updateData = { name: 'Updated Establishment' };
    const updatedEstablishment = await service.update(createdEstablishment.id, updateData);

    expect(updatedEstablishment.name).toBe(updateData.name);
  });

  it('should remove an establishment', async () => {
    const createEstablishmentDto = {
      name: 'Test Establishment',
      street: '123 Test St',
      city: 'Test City',
      state: 'TS',
      producerId: 1,
    };

    const createdEstablishment = await service.create(createEstablishmentDto);
    const removedEstablishment = await service.remove(createdEstablishment.id);

    expect(removedEstablishment.id).toBe(createdEstablishment.id);

    // Verificar se o estabelecimento foi removido
    const foundEstablishment = await service.findOne(createdEstablishment.id);
    expect(foundEstablishment).toBeNull();
  });
});
