import { Injectable } from '@nestjs/common';
import { UsuariosDto } from './dto/UsuariosDto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class UsuarioService {
  constructor(private prisma: PrismaService) {}

  async createUsuario(usuario: UsuariosDto) {
    return this.prisma.usuario.create({
      data: usuario
    });
  }
 
}
