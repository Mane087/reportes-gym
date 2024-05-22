import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProgresoUsuariosModule } from './progreso-usuarios/progreso-usuarios.module';
import { UsuarioModule } from './usuario/usuario.module';
import { EntrenadorModule } from './entrenador/entrenador.module';
import { RutinasModule } from './rutinas/rutinas.module';
import { RutinasUsuarioModule } from './rutinas-usuario/rutinas-usuario.module';
import { CuboRutinasModule } from './cubo-rutinas/cubo-rutinas.module';

@Module({
  imports: [ProgresoUsuariosModule, UsuarioModule, EntrenadorModule, RutinasModule, RutinasUsuarioModule, CuboRutinasModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
