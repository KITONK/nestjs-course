import {
  IsArray,
  IsInt,
  IsNotEmpty,
  IsString,
  IsUUID,
  Max,
  Min,
} from 'class-validator';

export class MovieDto {
  @IsString()
  @IsNotEmpty()
  title!: string;

  @IsInt()
  @IsNotEmpty()
  @Min(1888)
  @Max(new Date().getFullYear())
  releaseYear!: number;

  @IsArray()
  @IsUUID('4', { each: true })
  actorIds!: string[];

  @IsString()
  imageUrl!: string;
}
