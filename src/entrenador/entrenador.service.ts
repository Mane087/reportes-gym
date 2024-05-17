import { Injectable } from '@nestjs/common';
import { EntrenadorDto } from './dto/EntrenadorDto';
import { PrismaService } from 'src/prisma.service';


@Injectable()
export class EntrenadorService {

  constructor(private prisma: PrismaService) {}

  async createEntrenador(entrenador: EntrenadorDto) {
    return this.prisma.entrenador.create({
      data: entrenador
    });
  }

   
}
