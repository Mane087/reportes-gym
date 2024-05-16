import { Module } from '@nestjs/common';
import { PopoularidadRutinasService } from './popoularidad-rutinas.service';
import { PopoularidadRutinasController } from './popoularidad-rutinas.controller';

@Module({
  controllers: [PopoularidadRutinasController],
  providers: [PopoularidadRutinasService],
})
export class PopoularidadRutinasModule {}
