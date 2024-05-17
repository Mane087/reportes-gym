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
import { RutinasUsuarioService } from './rutinas-usuario.service';
import { RutinasUsuarioDto } from './dto/RutinasUsuarioDto';
import { ApiTags } from '@nestjs/swagger';

@Controller('rutinas-usuario')
@ApiTags('rutinas-usuario')
export class RutinasUsuarioController {
  constructor(private readonly rutinasUsuarioService: RutinasUsuarioService) {}

  @Post()
  create(@Body() rutinaUsuario: RutinasUsuarioDto) {
    return this.rutinasUsuarioService.createRutinaUsuario(rutinaUsuario);
  }

  @Get('/:id')
  GetRutinaUsuarioById(
    @Param('id', ParseIntPipe) id: number,
    @Query('satisfaccion-min', ParseIntPipe) satisfaccionMin: number,
    @Query('satisfaccion-max', ParseIntPipe) satisfaccionMax: number,
  ) {
    return this.rutinasUsuarioService.GetRutinaUsuarioById(
      id,
      satisfaccionMin,
      satisfaccionMax,
    );
  }
}
