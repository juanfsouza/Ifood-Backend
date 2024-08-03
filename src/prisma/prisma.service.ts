import { Injectable, OnModuleInit, INestApplication } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { ExtendedPrismaClient } from 'src/prisma-extended';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    console.log('Connecting to database:', process.env.DATABASE_URL);
    await this.$connect();
  }

  async enableShutdownHooks(app: INestApplication) {
    (this as ExtendedPrismaClient).$on('beforeExit', async () => {
      await app.close();
    });
  }
}
