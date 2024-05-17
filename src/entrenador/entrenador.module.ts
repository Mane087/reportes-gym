import { Module } from '@nestjs/common';
import { EntrenadorService } from './entrenador.service';
import { EntrenadorController } from './entrenador.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [EntrenadorController],
  providers: [EntrenadorService, PrismaService],
})
export class EntrenadorModule {}
