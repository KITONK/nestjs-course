import { Actor } from '@prisma/client';
import { Body, Controller, Post } from '@nestjs/common';

import { ActorService } from './actor.service';
import { CreateActorDto } from './dto/create-actor.dto';

@Controller('actors')
export class ActorController {
  constructor(private readonly actorService: ActorService) {}

  @Post()
  create(@Body() dto: CreateActorDto): Promise<Actor> {
    return this.actorService.create(dto);
  }
}
