import { Test, TestingModule } from '@nestjs/testing';
import { PrismaService } from '../prisma/prisma.service'; // Adjust path as needed

describe('PrismaService', () => {
  let prisma: PrismaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PrismaService],
    }).compile();

    prisma = module.get<PrismaService>(PrismaService);
  });

  it('should use SQLite for tests', async () => {
    const establishments = await prisma.establishment.findMany(); // Replace with a real query
    expect(establishments).toBeDefined();
  });
});
