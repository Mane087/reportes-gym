import { Injectable } from '@nestjs/common';
import { ProgresoDto } from './dto/ProgresoDto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class ProgresoUsuariosService {
  constructor(private prisma: PrismaService) {}


  async GetProgressUserById(id: number, startDate: Date, endDate: Date) {
    return this.prisma.progreso.findMany({
      where: {
        id_usuario: id,
        fecha: {
          gte: startDate,
          lte: endDate
        }
      }, include:{
        usuario: true
        
      }
    });
  }
  

  async CreateProgressUser(progreso: ProgresoDto) {
    return this.prisma.progreso.create({
      data: progreso
    });
  }
}
