import { Injectable } from '@nestjs/common';
import { RutinasUsuarioDto } from './dto/RutinasUsuarioDto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class RutinasUsuarioService {
  constructor(private prisma: PrismaService) {}

  async createRutinaUsuario(rutina: RutinasUsuarioDto) {
    return this.prisma.rutinasUsuario.create({
      data: rutina
    });
  }

  async GetRutinaUsuarioById(id: number, satisfaccionMin: number, satisfaccionMax: number) {
    return this.prisma.rutinasUsuario.findMany({
      where: {
        id_rutina: id,
        satisfaccion: {
          gte: satisfaccionMin,
          lte: satisfaccionMax
        }
      }
    });
  }
}
