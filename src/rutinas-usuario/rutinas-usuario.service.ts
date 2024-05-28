import { Injectable } from '@nestjs/common';
import { RutinasUsuarioDto } from './dto/RutinasUsuarioDto';
import { PrismaService } from 'src/prisma.service';
import { log } from 'console';

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

  async getClientesPorRutinaYEntrenadorMesActual() {
    const currentDate = new Date();
    const startOfMonth = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      1,
    );
    const endOfMonth = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() + 1,
      0,
    );

    // Formatear las fechas para que solo incluyan la parte de la fecha (sin la parte de la hora)
    const formattedStartOfMonth = startOfMonth.toISOString().split('T')[0];
    const formattedEndOfMonth = endOfMonth.toISOString().split('T')[0];

    console.log('startOfMonth', formattedStartOfMonth);
    console.log('endOfMonth', formattedEndOfMonth);

    const groupedData = await this.prisma.rutinasUsuario.groupBy({
      by: ['id_usuario', 'id_entrenador'],
      where: {
        fecha_inicio: new Date(formattedStartOfMonth),
        fecha_fin: new Date(formattedEndOfMonth),
      },
      _count: {
        id_usuario: true,
      },
    });

    return groupedData;
  }

  async getClientesPorEntrenadorYSucursalUltimosSeisMeses() {
    const currentDate = new Date();
    const startOfPeriod = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() - 6,
      1,
    );
    const endOfPeriod = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() + 1,
      0,
    );

    const groupedData = await this.prisma.rutinasUsuario.groupBy({
      by: ['id_entrenador', 'id_usuario'],
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

  async getClientesPorEntrenadorYSucursalAnual() {
    const currentDate = new Date();
    const startOfYear = new Date(currentDate.getFullYear(), 0, 1); // 1 de enero del año actual
    const endOfYear = new Date(currentDate.getFullYear(), 11, 31); // 31 de diciembre del año actual

    const groupedData = await this.prisma.rutinasUsuario.groupBy({
      by: ['id_entrenador', 'id_usuario'],
      where: {
        fecha_inicio: {
          gte: startOfYear,
          lte: endOfYear,
        },
      },
      _count: {
        id_usuario: true,
      },
    });

    return groupedData;
  }

  async getClientesPorEntrenadorYSucursalUltimosSeisMesesWithIdTrainer(
    id: number,
  ) {
    const currentDate = new Date();
    const startOfPeriod = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() - 6,
      1,
    );
    const endOfPeriod = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() + 1,
      0,
    );

    const groupedData = await this.prisma.rutinasUsuario.groupBy({
      by: ['id_entrenador', 'id_usuario'],
      where: {
        fecha_inicio: {
          gte: startOfPeriod,
          lte: endOfPeriod,
        },
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
