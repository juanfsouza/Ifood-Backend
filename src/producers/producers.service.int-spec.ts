import { Test, TestingModule } from '@nestjs/testing';
import { PrismaService } from '../prisma/prisma.service';
import { ProducersService } from './producers.service';

describe('ProducersService (integration)', () => {
  let service: ProducersService;
  let prismaService: PrismaService;
  let module: TestingModule;

  beforeAll(async () => {
    module = await Test.createTestingModule({
      providers: [ProducersService, PrismaService],
    }).compile();

    service = module.get<ProducersService>(ProducersService);
    prismaService = module.get<PrismaService>(PrismaService);

    // Inicialize ou limpe o banco de dados de teste aqui se necessário
  });

  afterAll(async () => {
    // Feche a conexão com o banco de dados e limpe os dados
    await prismaService.$disconnect();
  });

  beforeEach(async () => {
    // Prepare o ambiente de teste, por exemplo, limpando tabelas ou inserindo dados iniciais
    await prismaService.producer.deleteMany({});
  });

  it('should create a producer', async () => {
    const createProducerDto = {
      name: 'Test Producer',
      email: 'test@example.com',
      password: 'testpassword',
    };

    const producer = await service.create(createProducerDto);

    expect(producer).toHaveProperty('id');
    expect(producer.name).toBe(createProducerDto.name);
    expect(producer.email).toBe(createProducerDto.email);
  });

  it('should find a producer by ID', async () => {
    const createProducerDto = {
      name: 'Test Producer',
      email: 'test@example.com',
      password: 'testpassword',
    };

    const createdProducer = await service.create(createProducerDto);
    const foundProducer = await service.findById(createdProducer.id);

    expect(foundProducer).toEqual(createdProducer);
  });

  it('should update a producer', async () => {
    const createProducerDto = {
      name: 'Test Producer',
      email: 'test@example.com',
      password: 'testpassword',
    };

    const createdProducer = await service.create(createProducerDto);

    const updateData = { name: 'Updated Producer' };
    const updatedProducer = await service.update(createdProducer.id, updateData);

    expect(updatedProducer.name).toBe(updateData.name);
  });

  it('should remove a producer', async () => {
    const createProducerDto = {
      name: 'Test Producer',
      email: 'test@example.com',
      password: 'testpassword',
    };

    const createdProducer = await service.create(createProducerDto);
    const removedProducer = await service.remove(createdProducer.id);

    expect(removedProducer.id).toBe(createdProducer.id);

    // Ensure the producer is no longer in the database
    const foundProducer = await service.findById(createdProducer.id);
    expect(foundProducer).toBeNull();
  });
});
