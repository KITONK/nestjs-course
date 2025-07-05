import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateMovieRequest {
  @ApiProperty({
    description: 'The title of the movie',
    example: 'Fight Club',
    type: String,
  })
  title!: string;

  @ApiProperty({
    description: 'The release year of the movie',
    example: 1999,
    type: Number,
  })
  releaseYear!: number;

  @ApiPropertyOptional({
    description: 'Link to the movie poster',
    example: 'https://example.com/poster.jpg',
    type: String,
  })
  poster?: string;

  @ApiProperty({
    description: 'The actor ids of the movie',
    example: ['1234', '5678', '9101'],
    type: [String],
  })
  actorIds!: string[];
}
