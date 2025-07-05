import {
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Param,
  Post,
  Query,
} from '@nestjs/common';

import { MovieService } from './movie.service';
import { CreateMovieRequest } from './dto/create-movie.dto';

@ApiTags('Movies')
@Controller('movies')
export class MovieController {
  constructor(private readonly movieService: MovieService) {}

  @ApiOperation({
    summary: 'Get all movies',
    description: 'Returns all movies',
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Movies fetched successfully',
  })
  @Get()
  findAll() {
    return [
      {
        id: 1,
        title: 'The Matrix',
      },
      {
        id: 2,
        title: 'The Matrix Reloaded',
      },
    ];
  }

  @ApiOperation({
    summary: 'Get a movie by id',
    description: 'Returns a movie by id',
  })
  @ApiOkResponse({
    description: 'Movie fetched successfully',
  })
  @ApiNotFoundResponse({
    description: 'Movie not found',
    example: {
      status: 404,
      message: 'Movie not found',
      timestamp: new Date().toISOString(),
      path: '/movies/123',
    },
  })
  @Get(':id')
  findById(@Param('id') id: string, @Query('year') year: number) {
    return {
      id: 1,
      title: 'The Matrix',
    };
  }

  @ApiOperation({
    summary: 'Create a movie',
  })
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'Movie created successfully',
  })
  @Post()
  create(@Body() dto: CreateMovieRequest) {
    return dto;
  }
}
