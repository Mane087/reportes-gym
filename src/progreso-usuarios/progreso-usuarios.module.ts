import { Module } from '@nestjs/common';
import { ProgresoUsuariosService } from './progreso-usuarios.service';
import { ProgresoUsuariosController } from './progreso-usuarios.controller';

@Module({
  controllers: [ProgresoUsuariosController],
  providers: [ProgresoUsuariosService],
})
export class ProgresoUsuariosModule {}
