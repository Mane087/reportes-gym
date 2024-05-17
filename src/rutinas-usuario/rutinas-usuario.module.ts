import { Module } from '@nestjs/common';
import { RutinasUsuarioService } from './rutinas-usuario.service';
import { RutinasUsuarioController } from './rutinas-usuario.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [RutinasUsuarioController],
  providers: [RutinasUsuarioService, PrismaService],
})
export class RutinasUsuarioModule {}
