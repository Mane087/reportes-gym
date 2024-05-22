import { Controller, Get } from '@nestjs/common';
import { CuboRutinasService } from './cubo-rutinas.service';

@Controller('cubo-rutinas')
export class CuboRutinasController {
  constructor(private readonly cuboRutinasService: CuboRutinasService) {}

  @Get()
  getDataPopuRutinas() {
    return this.cuboRutinasService.getDataPopuRutinas();
  }
// DATOS INICIALES DE RUTINAS_USUARIO
// PARAMETROS ID-RUTINA, FITLTRO DE FECHA INICIO Y FIN, ADEMAS 
// FILTRADO DRILLDOWN/UP POR FECHA MENSUAL, BIMESTRE, TRIMESTRE, SEMESTRE Y ANUAL
// FILTRAR POR UNA RUTINA - SLICE 
// FILTRAR POR UNA RUTINA, EN UN RANGO DE VALORCIONES - DICE 
// CAMBIAR DATOS POR LAS RUTINAS - PIVOTS



}
