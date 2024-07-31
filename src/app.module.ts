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

@Module({
  imports: [ProducersModule, CustomersModule, ProductsModule, EstablishmentsModule, OrdersModule, ReviewsModule, CouponsModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
