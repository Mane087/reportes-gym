import { Module } from '@nestjs/common';
import { CuboRutinasService } from './cubo-rutinas.service';
import { CuboRutinasController } from './cubo-rutinas.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [CuboRutinasController],
  providers: [CuboRutinasService, PrismaService],
})
export class CuboRutinasModule {}
