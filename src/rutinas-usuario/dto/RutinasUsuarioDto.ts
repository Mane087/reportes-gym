import { Type } from 'class-transformer';
import { IsNotEmpty, IsNumber, IsDate } from 'class-validator';

export class RutinasUsuarioDto {
  @IsNotEmpty()
  @IsNumber()
  id_usuario: number;

  @IsNotEmpty()
  @IsNumber()
  id_rutina: number;

  @IsNotEmpty()
  @IsNumber()
  id_entrenador: number;

  @IsNotEmpty()
  @IsDate()
  @Type(() => Date)
  fecha_inicio: Date;

  @IsNotEmpty()
  @IsDate()
  @Type(() => Date)
  fecha_fin: Date;

  @IsNotEmpty()
  @IsNumber()
  satisfaccion: number;
}
