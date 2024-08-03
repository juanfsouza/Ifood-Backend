import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import { TestDatabaseModule } from '../test-database.module';
import { EstablishmentsController } from './establishments.controller';
import { EstablishmentsService } from './establishments.service';
import { PrismaService } from '../prisma/prisma.service';
import { CreateEstablishmentDto } from './dto/create-establishment.dto';
import { UpdateEstablishmentDto } from './dto/update-establishment.dto';
import * as request from 'supertest';

describe('EstablishmentsController (e2e)', () => {
  let app: INestApplication;
  let service: EstablishmentsService;
  let prisma: PrismaService;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [TestDatabaseModule], // Importar o módulo de banco de dados de teste
      controllers: [EstablishmentsController],
      providers: [EstablishmentsService, PrismaService],
    }).compile();

    app = moduleFixture.createNestApplication();
    app.useGlobalPipes(new ValidationPipe());
    await app.init();

    service = moduleFixture.get<EstablishmentsService>(EstablishmentsService);
    prisma = moduleFixture.get<PrismaService>(PrismaService);
  });

  afterAll(async () => {
    await app.close();
  });

  it('/establishments (POST) should create an establishment', async () => {
    const createDto: CreateEstablishmentDto = {
      name: 'New Establishment',
      street: '123 Main St',
      city: 'Somewhere',
      state: 'CA',
      producerId: 1,
    };

    const response = await request(app.getHttpServer())
      .post('/establishments')
      .send(createDto)
      .expect(201);

    expect(response.body).toHaveProperty('id');
    expect(response.body.name).toBe(createDto.name);
    expect(response.body.street).toBe(createDto.street);
    expect(response.body.city).toBe(createDto.city);
    expect(response.body.state).toBe(createDto.state);
    expect(response.body.producerId).toBe(createDto.producerId);
  });

  it('/establishments (GET) should return all establishments', async () => {
    const response = await request(app.getHttpServer())
      .get('/establishments')
      .expect(200);

    expect(Array.isArray(response.body)).toBe(true);
  });

  it('/establishments/:id (GET) should return an establishment', async () => {
    // Primeiro, crie um estabelecimento
    const createDto: CreateEstablishmentDto = {
      name: 'Test Establishment',
      street: '123 Test St',
      city: 'Test City',
      state: 'TS',
      producerId: 1,
    };

    const createResponse = await request(app.getHttpServer())
      .post('/establishments')
      .send(createDto)
      .expect(201);

    const id = createResponse.body.id;

    // Teste a recuperação do estabelecimento
    const response = await request(app.getHttpServer())
      .get(`/establishments/${id}`)
      .expect(200);

    expect(response.body.id).toBe(id);
    expect(response.body.name).toBe(createDto.name);
  });

  it('/establishments/:id (PATCH) should update an establishment', async () => {
    // Primeiro, crie um estabelecimento
    const createDto: CreateEstablishmentDto = {
      name: 'Test Establishment',
      street: '123 Test St',
      city: 'Test City',
      state: 'TS',
      producerId: 1,
    };

    const createResponse = await request(app.getHttpServer())
      .post('/establishments')
      .send(createDto)
      .expect(201);

    const id = createResponse.body.id;

    // Atualize o estabelecimento
    const updateDto: UpdateEstablishmentDto = { name: 'Updated Name' };

    const response = await request(app.getHttpServer())
      .patch(`/establishments/${id}`)
      .send(updateDto)
      .expect(200);

    expect(response.body.id).toBe(id);
    expect(response.body.name).toBe(updateDto.name);
  });

  it('/establishments/:id (DELETE) should remove an establishment', async () => {
    // Primeiro, crie um estabelecimento
    const createDto: CreateEstablishmentDto = {
      name: 'Establishment to Remove',
      street: '123 Test St',
      city: 'Test City',
      state: 'TS',
      producerId: 1,
    };

    const createResponse = await request(app.getHttpServer())
      .post('/establishments')
      .send(createDto)
      .expect(201);

    const id = createResponse.body.id;

    // Remova o estabelecimento
    await request(app.getHttpServer())
      .delete(`/establishments/${id}`)
      .expect(200);

    // Verifique se o estabelecimento foi removido
    await request(app.getHttpServer())
      .get(`/establishments/${id}`)
      .expect(404);
  });
});
