import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from 'src/app.module';
import { PrismaService } from 'src/prisma/prisma.service';

describe('OrdersController (integration)', () => {
  let app: INestApplication;
  let prisma: PrismaService;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    prisma = app.get<PrismaService>(PrismaService);
    await app.init();

    // Inserir dados de teste no banco de dados
    const customer = await prisma.customer.create({
      data: {
        name: 'Test Customer',
        email: 'testcustomer@example.com',
        password: 'password',
      },
    });

    const producer = await prisma.producer.create({
      data: {
        name: 'Test Producer',
        email: 'testproducer@example.com',
        password: 'password',
      },
    });

    const product = await prisma.product.create({
      data: {
        name: 'Test Product',
        description: 'Description for test product',
        price: 100.0,
        producerId: producer.id,
      },
    });

    await prisma.order.create({
      data: {
        totalPrice: 100.0,
        customerId: customer.id,
        products: {
          connect: [{ id: product.id }],
        },
      },
    });
  });

  afterAll(async () => {
    // Limpar dados de teste
    await prisma.order.deleteMany({});
    await prisma.product.deleteMany({});
    await prisma.producer.deleteMany({});
    await prisma.customer.deleteMany({});
    await app.close();
  });

  it('/orders (GET)', () => {
    return request(app.getHttpServer())
      .get('/orders')
      .expect(200)
      .expect('Content-Type', /json/)
      .expect((res) => {
        expect(res.body).toBeInstanceOf(Array);
        expect(res.body.length).toBeGreaterThan(0);
        expect(res.body[0]).toHaveProperty('id');
        expect(res.body[0]).toHaveProperty('totalPrice');
        expect(res.body[0]).toHaveProperty('customerId');
      });
  });

  it('/orders/:id (GET)', async () => {
    const order = await prisma.order.findFirst();

    return request(app.getHttpServer())
      .get(`/orders/${order.id}`)
      .expect(200)
      .expect('Content-Type', /json/)
      .expect((res) => {
        expect(res.body).toHaveProperty('id', order.id);
        expect(res.body).toHaveProperty('totalPrice', order.totalPrice);
        expect(res.body).toHaveProperty('customerId', order.customerId);
      });
  });

  it('/orders (POST)', async () => {
    const customer = await prisma.customer.findFirst();
    const product = await prisma.product.findFirst();

    const newOrder = {
      totalPrice: 200.0,
      customerId: customer.id,
      productIds: [product.id],
    };

    return request(app.getHttpServer())
      .post('/orders')
      .send(newOrder)
      .expect(201)
      .expect('Content-Type', /json/)
      .expect((res) => {
        expect(res.body).toHaveProperty('id');
        expect(res.body).toHaveProperty('totalPrice', newOrder.totalPrice);
        expect(res.body).toHaveProperty('customerId', newOrder.customerId);
      });
  });

  it('/orders/:id (DELETE)', async () => {
    const order = await prisma.order.findFirst();

    return request(app.getHttpServer())
      .delete(`/orders/${order.id}`)
      .expect(200)
      .expect((res) => {
        expect(res.body).toHaveProperty('id', order.id);
      });
  });
});
