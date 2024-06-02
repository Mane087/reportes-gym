import { Injectable } from '@nestjs/common';
import { EntrenamientosDto } from './dto/EntrenamientosDto';
import { PrismaService } from 'src/prisma.service';
import e from 'express';

@Injectable()
export class EntrenamientosService {
  constructor(private prisma: PrismaService) {}

  async create(createEntrenamientoDto: EntrenamientosDto) {
    return await this.prisma.entrenamientos.create({
      data: createEntrenamientoDto,
    });
  }

  async findAll() {
    const groupedData = await this.prisma.entrenamientos.groupBy({
      by: ['id_sucursal', 'id_entrenador'],
      _count: {
        id_usuario: true,
      },
    });

    const detailedData = await Promise.all(
      groupedData.map(async (group) => {
        const details = await this.prisma.entrenamientos.findMany({
          where: {
            id_sucursal: group.id_sucursal,
            id_entrenador: group.id_entrenador,
          },
          select: {
            fecha_inicio: true,
            fecha_fin: true,
          },
        });

        return {
          ...group,
          fecha_inicio: details[0]?.fecha_inicio,
          fecha_fin: details[0]?.fecha_fin,
        };
      }),
    );

    return detailedData;
  }

  async findByEntrenador(idEntrenador: number) {
    // Realiza la consulta `groupBy` para obtener los conteos agrupados por `id_sucursal`
    const groupedData = await this.prisma.entrenamientos.groupBy({
      by: ['id_sucursal'],
      where: {
        id_entrenador: idEntrenador,
      },
      _count: {
        id_usuario: true,
      },
    });

    // Obtén los detalles de las fechas para cada grupo
    const detailedData = await Promise.all(
      groupedData.map(async (group) => {
        const details = await this.prisma.entrenamientos.findMany({
          where: {
            id_sucursal: group.id_sucursal,
            id_entrenador: idEntrenador,
          },
          select: {
            fecha_inicio: true,
            fecha_fin: true,
          },
        });

        return {
          ...group,
          fecha_inicio: details[0]?.fecha_inicio,
          fecha_fin: details[0]?.fecha_fin,
        };
      }),
    );

    return detailedData;
  }

  async findBySucursal(idSucursal: number) {
    // Realiza la consulta `groupBy` para obtener los conteos agrupados por `id_entrenador`
    const groupedData = await this.prisma.entrenamientos.groupBy({
      by: ['id_entrenador'],
      where: {
        id_sucursal: idSucursal,
      },
      _count: {
        id_usuario: true,
      },
    });

    // Obtén los detalles de las fechas para cada grupo
    const detailedData = await Promise.all(
      groupedData.map(async (group) => {
        const details = await this.prisma.entrenamientos.findMany({
          where: {
            id_sucursal: idSucursal,
            id_entrenador: group.id_entrenador,
          },
          select: {
            fecha_inicio: true,
            fecha_fin: true,
          },
        });

        return {
          ...group,
          fecha_inicio: details[0]?.fecha_inicio,
          fecha_fin: details[0]?.fecha_fin,
        };
      }),
    );

    return detailedData;
  }
}
