import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProgresoUsuariosService } from './progreso-usuarios.service';
import { CreateProgresoUsuarioDto } from './dto/create-progreso-usuario.dto';
import { UpdateProgresoUsuarioDto } from './dto/update-progreso-usuario.dto';

@Controller('progreso-usuarios')
export class ProgresoUsuariosController {
  constructor(private readonly progresoUsuariosService: ProgresoUsuariosService) {}

  @Post()
  create(@Body() createProgresoUsuarioDto: CreateProgresoUsuarioDto) {
    return this.progresoUsuariosService.create(createProgresoUsuarioDto);
  }

  @Get()
  findAll() {
    return this.progresoUsuariosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.progresoUsuariosService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProgresoUsuarioDto: UpdateProgresoUsuarioDto) {
    return this.progresoUsuariosService.update(+id, updateProgresoUsuarioDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.progresoUsuariosService.remove(+id);
  }
}


// PODER FILTRAR EL PROGESO POR FECHA DE TAL FECHA A TAL FECHA