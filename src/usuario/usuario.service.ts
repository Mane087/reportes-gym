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

  async findAll() {
    return this.prisma.usuario.groupBy({
      by: ['id_sucursal'],
      _count: {
        id_usuario: true,
      },
    });
  }
 
}
