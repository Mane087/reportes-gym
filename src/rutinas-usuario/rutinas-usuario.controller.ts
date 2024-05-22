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

  @Get()
  getRutinaUsuarios() {
    return this.rutinasUsuarioService.getRutinaUsuarios();
  }

  @Get('rutinaBySatisfaccion/:id')
  GetRutinaUsuarioBySatisdfaccion(
    @Param('id', ParseIntPipe) id: number,
    @Query('satisfaccion', ParseIntPipe) satisfaccion: number,
  ) {
    return this.rutinasUsuarioService.GetRutinaUsuarioBySatisfaccion(
      id,
      satisfaccion,
    );
  }

  @Get('rutinaById/:id')
  GetRutinaUsuarioById(@Param('id', ParseIntPipe) id: number) {
    return this.rutinasUsuarioService.GetRutinaUsuarioById(id);
  }

  @Get('rutinaByDate')
  GetRutinaUsuarioByDate(
    @Query('fecha_inicio') fecha_inicio: string,
    @Query('fecha_fin') fecha_fin: string,
  ) {
    const start = new Date(fecha_inicio);
    const end = new Date(fecha_fin);
    console.log('data de fecha', start, end);
    return this.rutinasUsuarioService.GetRutinaUsuarioByDate(start, end);
  }
}
