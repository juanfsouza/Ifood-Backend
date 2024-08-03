import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from 'src/app.module';
import { PrismaService } from 'src/prisma/prisma.service';

describe('CouponsController (integration)', () => {
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
    await prisma.coupon.createMany({
      data: [
        {
          code: 'DISCOUNT10',
          discount: 10.0,
          expiresAt: new Date(Date.now() + 1000 * 60 * 60 * 24), // Expira em 1 dia
        },
        {
          code: 'DISCOUNT20',
          discount: 20.0,
          expiresAt: new Date(Date.now() + 1000 * 60 * 60 * 24 * 7), // Expira em 7 dias
        },
      ],
    });
  });

  afterAll(async () => {
    // Limpar dados de teste
    await prisma.coupon.deleteMany({});
    await app.close();
  });

  it('/coupons (GET)', () => {
    return request(app.getHttpServer())
      .get('/coupons')
      .expect(200)
      .expect('Content-Type', /json/)
      .expect((res) => {
        expect(res.body).toBeInstanceOf(Array);
        expect(res.body.length).toBeGreaterThan(0);
        expect(res.body[0]).toHaveProperty('code');
        expect(res.body[0]).toHaveProperty('discount');
        expect(res.body[0]).toHaveProperty('expiresAt');
      });
  });

  it('/coupons/:id (GET)', async () => {
    const coupon = await prisma.coupon.findFirst();

    return request(app.getHttpServer())
      .get(`/coupons/${coupon.id}`)
      .expect(200)
      .expect('Content-Type', /json/)
      .expect((res) => {
        expect(res.body).toHaveProperty('id', coupon.id);
        expect(res.body).toHaveProperty('code', coupon.code);
        expect(res.body).toHaveProperty('discount', coupon.discount);
        expect(res.body).toHaveProperty('expiresAt');
      });
  });

  it('/coupons (POST)', () => {
    const newCoupon = {
      code: 'NEWCOUPON50',
      discount: 50.0,
      expiresAt: new Date(Date.now() + 1000 * 60 * 60 * 24 * 30), // Expira em 30 dias
    };

    return request(app.getHttpServer())
      .post('/coupons')
      .send(newCoupon)
      .expect(201)
      .expect('Content-Type', /json/)
      .expect((res) => {
        expect(res.body).toHaveProperty('id');
        expect(res.body).toHaveProperty('code', newCoupon.code);
        expect(res.body).toHaveProperty('discount', newCoupon.discount);
        expect(res.body).toHaveProperty('expiresAt');
      });
  });

  it('/coupons/:id (DELETE)', async () => {
    const coupon = await prisma.coupon.findFirst();

    return request(app.getHttpServer())
      .delete(`/coupons/${coupon.id}`)
      .expect(200)
      .expect((res) => {
        expect(res.body).toHaveProperty('id', coupon.id);
        expect(res.body).toHaveProperty('code', coupon.code);
      });
  });
});
