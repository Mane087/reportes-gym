import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { UsuariosDto } from './dto/UsuariosDto';
import { ApiTags } from '@nestjs/swagger';

@Controller('usuario')
@ApiTags('usuarios')
export class UsuarioController {
  constructor(private readonly usuarioService: UsuarioService) {}

  @Post()
  create(@Body() usuario: UsuariosDto) {
    return this.usuarioService.createUsuario(usuario);
  }

  @Get()
  findAll() {
    return this.usuarioService.findAll();
  }

}
