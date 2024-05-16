import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PopoularidadRutinasModule } from './popoularidad-rutinas/popoularidad-rutinas.module';
import { ProgresoUsuariosModule } from './progreso-usuarios/progreso-usuarios.module';

@Module({
  imports: [PopoularidadRutinasModule, ProgresoUsuariosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
