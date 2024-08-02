import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProducersModule } from './producers/producers.module';
import { CustomersModule } from './customers/customers.module';
import { ProductsModule } from './products/products.module';
import { EstablishmentsModule } from './establishments/establishments.module';
import { OrdersModule } from './orders/orders.module';
import { ReviewsModule } from './reviews/reviews.module';
import { CouponsModule } from './coupons/coupons.module';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';
import { HttpExceptionFilter } from '../common/filters/http-exception.filter';
import { APP_FILTER } from '@nestjs/core';
import { PrismaService } from './prisma/prisma.service';

@Module({
  imports: [
    ProducersModule, 
    CustomersModule, 
    ProductsModule, 
    EstablishmentsModule, 
    OrdersModule, 
    ReviewsModule, 
    CouponsModule, 
    AuthModule,
    PrismaModule,
  ],
  exports: [PrismaService],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_FILTER,
      useClass: HttpExceptionFilter,
    },
  ],
})
export class AppModule {}
