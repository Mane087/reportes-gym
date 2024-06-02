import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
  Query,
} from '@nestjs/common';
import { EntrenamientosService } from './entrenamientos.service';
import { EntrenamientosDto } from './dto/EntrenamientosDto';
import { ApiTags } from '@nestjs/swagger';

@Controller('entrenamientos')
@ApiTags('Entrenamientos')
export class EntrenamientosController {
  constructor(private readonly entrenamientosService: EntrenamientosService) {}

  @Post()
  create(@Body() createEntrenamientoDto: EntrenamientosDto) {
    return this.entrenamientosService.create(createEntrenamientoDto);
  }

  @Get('getAll')
  findAll() {
    return this.entrenamientosService.findAll();
  }

  @Get('getByEntrenador/:id_entrenador')
  findByEntrenador(
    @Param('id_entrenador', ParseIntPipe) id_entrenador: number,
  ) {
    return this.entrenamientosService.findByEntrenador(id_entrenador);
  }

  @Get('getBySucursal/:id_sucursal')
  findBySucursal(@Param('id_sucursal', ParseIntPipe) id_sucursal: number) {
    return this.entrenamientosService.findBySucursal(id_sucursal);
  }
}
