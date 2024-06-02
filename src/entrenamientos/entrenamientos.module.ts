import { Module } from '@nestjs/common';
import { EntrenamientosService } from './entrenamientos.service';
import { EntrenamientosController } from './entrenamientos.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [EntrenamientosController],
  providers: [EntrenamientosService, PrismaService],
})
export class EntrenamientosModule {}
