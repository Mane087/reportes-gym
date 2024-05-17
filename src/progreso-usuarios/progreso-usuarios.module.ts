import { Module } from '@nestjs/common';
import { ProgresoUsuariosService } from './progreso-usuarios.service';
import { ProgresoUsuariosController } from './progreso-usuarios.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [ProgresoUsuariosController],
  providers: [ProgresoUsuariosService,PrismaService],
})
export class ProgresoUsuariosModule {}
