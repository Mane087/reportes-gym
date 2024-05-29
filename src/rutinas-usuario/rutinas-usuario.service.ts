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

  async getClientes(periodo: number) {
    const currentDate = new Date();
    let startOfPeriod: Date, endOfPeriod: Date;

    if (periodo === 1) {
      // Anual
      startOfPeriod = new Date(currentDate.getFullYear(), 0, 1);
      endOfPeriod = new Date(currentDate.getFullYear(), 11, 31);
    } else if (periodo === 2) {
      // Semestral
      startOfPeriod = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth() - 5,
        1,
      );
      endOfPeriod = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth() + 1,
        0,
      );
    } else {
      // Mensual
      startOfPeriod = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        1,
      );
      endOfPeriod = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth() + 1,
        0,
      );
    }

    const groupedData = await this.prisma.rutinasUsuario.groupBy({
      by: ['id_usuario', 'id_entrenador'],
      where: {
        fecha_inicio: {
          gte: startOfPeriod,
          lte: endOfPeriod,
        },
      },
      _count: {
        id_usuario: true,
      },
    });

    return groupedData;
  }

  async getClientesPorEntrenador(id: number, periodo: number) {
    const currentDate = new Date();
    let startOfPeriod, endOfPeriod;
    if (periodo === 1) {
      startOfPeriod = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth() - 6,
        1,
      );
      endOfPeriod = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth() + 1,
        0,
      );
    } else if (periodo === 2) {
      startOfPeriod = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth() - 6,
        1,
      );
      endOfPeriod = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth() + 1,
        0,
      );
    } else {
      startOfPeriod = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        1,
      );
      endOfPeriod = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth() + 1,
        0,
      );
    }

    const groupedData = await this.prisma.rutinasUsuario.groupBy({
      by: ['id_entrenador', 'id_usuario'],
      where: {
        fecha_inicio: startOfPeriod,
        fecha_fin: endOfPeriod,
        id_entrenador: id,
      },
      _count: {
        id_usuario: true,
      },
    });

    return groupedData;
  }

  async getEntrenadorById(id: number) {
    return this.prisma.entrenador.findUnique({
      where: {
        id_entrenador: id,
      },
      include: {
        EntrenadoresSucursales: {
          include: {
            sucursal: true,
          },
        },
      },
    });
  }

  async getSucursalById(id: number) {
    return this.prisma.sucursal.findUnique({
      where: {
        id_sucursal: id,
      },
    });
  }
}
