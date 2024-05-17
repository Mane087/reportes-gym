import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EntrenadorService } from './entrenador.service';
import { EntrenadorDto } from './dto/EntrenadorDto';
import { ApiTags } from '@nestjs/swagger';

@Controller('entrenadores')
@ApiTags('entrenadores')
export class EntrenadorController {
  constructor(private readonly entrenadorService: EntrenadorService) {}

  @Post()
  create(@Body() entrenador: EntrenadorDto) {
    return this.entrenadorService.createEntrenador(entrenador);
  }

 
}
