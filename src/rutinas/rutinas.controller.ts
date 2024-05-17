import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RutinasService } from './rutinas.service';
import {RutinasDto} from './dto/RutinasDto';
import { ApiTags } from '@nestjs/swagger';

@Controller('rutinas')
@ApiTags('rutinas')
export class RutinasController {
  constructor(private readonly rutinasService: RutinasService) {}

  @Post()
  create(@Body() createRutinaDto: RutinasDto) {
    return this.rutinasService.createRutina(createRutinaDto);
  }

}
