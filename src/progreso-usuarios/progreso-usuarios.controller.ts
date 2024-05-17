import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe, Query } from '@nestjs/common';
import { ProgresoUsuariosService } from './progreso-usuarios.service';
import { ProgresoDto } from './dto/ProgresoDto';
import { ApiTags } from '@nestjs/swagger';


@Controller('progreso-usuarios')
@ApiTags('Progreso Usuarios')
export class ProgresoUsuariosController {
  constructor(private readonly progresoUsuariosService: ProgresoUsuariosService) {}

  @Get('/:id')
  GetProgressUserById(
    @Param('id', ParseIntPipe) id: number,
    @Query('startDate') startDate: string,
    @Query('endDate') endDate: string
  ) {
    const start = new Date(startDate);
    const end = new Date(endDate);
    return this.progresoUsuariosService.GetProgressUserById(id, start, end);
  }

  @Post()
  CreateProgressUser(@Body() progreso :  ProgresoDto) {
    return this.progresoUsuariosService.CreateProgressUser(progreso);
  }

 
}


// PODER FILTRAR EL PROGESO POR FECHA DE TAL FECHA A TAL FECHA y TAMBIEN POR USUARIO