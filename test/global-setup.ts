import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function globalSetup() {
  await prisma.$connect();
  // You may run migrations or seed data here
  await prisma.$disconnect();
}
