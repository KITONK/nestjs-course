import { Body, Controller, Post } from '@nestjs/common';
import { ActorService } from './actor.service';
import { ActorEntity } from './entities/actor.entity';
import { CreateActorDto } from './dto/create-actor.dto';

@Controller('actors')
export class ActorController {
  constructor(private readonly actorService: ActorService) {}

  @Post()
  async create(@Body() dto: CreateActorDto): Promise<ActorEntity> {
    return this.actorService.create(dto);
  }
}
