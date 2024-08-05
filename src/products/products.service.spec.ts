import { Test, TestingModule } from '@nestjs/testing';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { PrismaModule } from 'src/prisma/prisma.module';

describe('ProductsService', () => {
  let service: ProductsService;
  let prismaService: PrismaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [PrismaModule],
      providers: [
        ProductsService,
        {
          provide: PrismaService,
          useValue: {
            product: {
              findMany: jest.fn().mockResolvedValue([]),
              findUnique: jest.fn().mockResolvedValue(null),
              create: jest.fn().mockResolvedValue
              ({ 
                id: 1, name: 'Test Product', 
                description: 'Test Description', 
                price: 100, 
                producerId: 1 
              }),
              update: jest.fn().mockResolvedValue
              ({ 
                id: 1, 
                name: 'Updated Product', 
                description: 'Updated Description', 
                price: 150, 
                producerId: 1 
              }),
              delete: jest.fn().mockResolvedValue
              ({ 
                id: 1, 
                name: 'Deleted Product',
                 description: 'Deleted Description', 
                 price: 100, 
                 producerId: 1 
              }),
            },
          },
        },
      ],
    }).compile();

    service = module.get<ProductsService>(ProductsService);
    prismaService = module.get<PrismaService>(PrismaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should create a product', async () => {
    const createProductDto: CreateProductDto = 
      { 
        name: 'Test Product', 
        description: 'Test Description', 
        price: 100, 
        producerId: 1 
      };
    const result = await service.create(createProductDto);
    expect(result).toEqual
      ({ 
          id: 1, 
          name: 'Test Product', 
          description: 'Test Description', 
          price: 100, 
          producerId: 1 
      });
    expect(prismaService.product.create).toHaveBeenCalledWith({
      data: createProductDto,
    });
  });

  it('should return all products', async () => {
    const result = await service.findAll();
    expect(result).toEqual([]);
    expect(prismaService.product.findMany).toHaveBeenCalled();
  });

  it('should return a product by id', async () => {
    const result = await service.findOne(1);
    expect(result).toBeNull();
    expect(prismaService.product.findUnique).toHaveBeenCalledWith
      ({ 
        where: { id: 1 } 
      });
  });

  it('should update a product', async () => {
    const updateProductDto: Partial<CreateProductDto> =
      { 
        name: 'Updated Product', 
        description: 'Updated Description', 
        price: 150 
      };
    const result = await service.update(1, updateProductDto);
      expect(result).toEqual
        ({ 
          id: 1, 
          name: 'Updated Product', 
          description: 'Updated Description', 
          price: 150, 
          producerId: 1 
        });
    expect(prismaService.product.update).toHaveBeenCalledWith({
      where: { id: 1 },
      data: updateProductDto,
    });
  });

  it('should delete a product', async () => {
    const result = await service.remove(1);
      expect(result).toEqual
        ({ 
          d: 1, 
          name: 'Deleted Product', 
          description: 'Deleted Description', 
          price: 100, 
          producerId: 1 
        });
    expect(prismaService.product.delete).toHaveBeenCalledWith
    ({ 
      where: { id: 1 } 
    });
  });
});
