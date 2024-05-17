import { Module } from '@nestjs/common';
import { RutinasService } from './rutinas.service';
import { RutinasController } from './rutinas.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [RutinasController],
  providers: [RutinasService, PrismaService],
})
export class RutinasModule {}
