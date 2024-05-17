import { Injectable } from '@nestjs/common';
import { RutinasDto } from './dto/RutinasDto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class RutinasService {
  constructor(private prisma: PrismaService) {}

  async createRutina(rutina: RutinasDto) {
    return this.prisma.rutina.create({
      data: rutina
    });
  }
}
