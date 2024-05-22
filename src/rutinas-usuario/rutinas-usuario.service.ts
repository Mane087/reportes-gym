import { Injectable } from '@nestjs/common';
import { RutinasUsuarioDto } from './dto/RutinasUsuarioDto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class RutinasUsuarioService {
  constructor(private prisma: PrismaService) {}

  async createRutinaUsuario(rutina: RutinasUsuarioDto) {
    return this.prisma.rutinasUsuario.create({
      data: rutina,
    });
  }

  async GetRutinaUsuarioBySatisfaccion(id: number, satisfaccion: number) {
    return this.prisma.rutinasUsuario.findMany({
      where: {
        id_rutina: id,
        satisfaccion: satisfaccion,
      },
      include: {
        rutina: true,
        usuario: true,
        entrenador: true,
      },
    });
  }

  async GetRutinaUsuarioById(id: number) {
    return this.prisma.rutinasUsuario.findMany({
      where: {
        id_rutina: id,
      },
      include: {
        rutina: true,
        usuario: true,
        entrenador: true,
      },
    });
  }

  async GetRutinaUsuarioByDate(fecha_inicio: Date, fecha_fin: Date) {
    return this.prisma.rutinasUsuario.findMany({
      where: {
        fecha_inicio: fecha_inicio,
        fecha_fin: fecha_fin,
      },
      include: {
        rutina: true,
        usuario: true,
        entrenador: true,
      },
    });
  }

  async getRutinaUsuarios() {
    return this.prisma.rutinasUsuario.findMany({
      include: {
        rutina: true,
        usuario: true,
        entrenador: true,
      },
    });
  }
}
