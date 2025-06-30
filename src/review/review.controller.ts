import { Review } from '@prisma/client';
import { Body, Controller, Post } from '@nestjs/common';

import { ReviewService } from './review.service';
import { CreateReviewDto } from './dto/create-review.dto';

@Controller('reviews')
export class ReviewController {
  constructor(private readonly reviewService: ReviewService) {}

  @Post()
  create(@Body() dto: CreateReviewDto): Promise<Review> {
    return this.reviewService.create(dto);
  }
}
