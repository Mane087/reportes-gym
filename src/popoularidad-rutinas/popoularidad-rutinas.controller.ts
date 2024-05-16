import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PopoularidadRutinasService } from './popoularidad-rutinas.service';
import { CreatePopoularidadRutinaDto } from './dto/create-popoularidad-rutina.dto';
import { UpdatePopoularidadRutinaDto } from './dto/update-popoularidad-rutina.dto';

@Controller('popoularidad-rutinas')
export class PopoularidadRutinasController {
  constructor(private readonly popoularidadRutinasService: PopoularidadRutinasService) {}

  @Post()
  create(@Body() createPopoularidadRutinaDto: CreatePopoularidadRutinaDto) {
    return this.popoularidadRutinasService.create(createPopoularidadRutinaDto);
  }

  @Get()
  findAll() {
    return this.popoularidadRutinasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.popoularidadRutinasService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePopoularidadRutinaDto: UpdatePopoularidadRutinaDto) {
    return this.popoularidadRutinasService.update(+id, updatePopoularidadRutinaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.popoularidadRutinasService.remove(+id);
  }
}


//PODER FILTRAR POR RUTINAS