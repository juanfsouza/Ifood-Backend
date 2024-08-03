import { Test, TestingModule } from '@nestjs/testing';
import { ReviewsController } from './reviews.controller';
import { ReviewsService } from './reviews.service';
import { CreateReviewDto } from './dto/create-review.dto';

describe('ReviewsController', () => {
  let controller: ReviewsController;
  let service: ReviewsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ReviewsController],
      providers: [
        {
          provide: ReviewsService,
          useValue: {
            create: jest.fn(),
            findAll: jest.fn(),
            findOne: jest.fn(),
            update: jest.fn(),
            remove: jest.fn(),
          },
        },
      ],
    }).compile();

    controller = module.get<ReviewsController>(ReviewsController);
    service = module.get<ReviewsService>(ReviewsService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should create a review', async () => {
    const createDto: CreateReviewDto = {
      productId: 1,
      customerId: 1,
      rating: 5,
      comment: 'Excellent product!',
    };

    const result = {
      id: 1,
      productId: 1,
      customerId: 1,
      rating: 5,
      comment: 'Excellent product!',
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    jest.spyOn(service, 'create').mockResolvedValue(result);

    expect(await controller.create(createDto)).toEqual(result);
  });

  it('should find all reviews', async () => {
    const result = [
      {
        id: 1,
        productId: 1,
        customerId: 1,
        rating: 5,
        comment: 'Excellent product!',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];

    jest.spyOn(service, 'findAll').mockResolvedValue(result);

    expect(await controller.findAll()).toEqual(result);
  });

  it('should find one review', async () => {
    const result = {
      id: 1,
      productId: 1,
      customerId: 1,
      rating: 5,
      comment: 'Excellent product!',
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    jest.spyOn(service, 'findOne').mockResolvedValue(result);

    expect(await controller.findOne(1)).toEqual(result); 
  });

  it('should update a review', async () => {
    const updateDto: Partial<CreateReviewDto> = { comment: 'Updated comment!' };
    const result = {
      id: 1,
      productId: 1,
      customerId: 1,
      rating: 5,
      comment: 'Updated comment!',
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    jest.spyOn(service, 'update').mockResolvedValue(result);

    expect(await controller.update(1, updateDto)).toEqual(result); 
  });

  it('should remove a review', async () => {
    const result = {
      id: 1,
      productId: 1,
      customerId: 1,
      rating: 5,
      comment: 'Excellent product!',
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    jest.spyOn(service, 'remove').mockResolvedValue(result);

    expect(await controller.remove(1)).toEqual(result); 
  });
});
