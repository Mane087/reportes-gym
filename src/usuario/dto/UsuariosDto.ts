import { IsNotEmpty, IsString, IsNumber } from 'class-validator';

export class UsuariosDto {
  @IsNotEmpty()
  @IsString()
  nombre: string;

  @IsNotEmpty()
  @IsString()
  apellido: string;

  @IsNotEmpty()
  @IsNumber()
  id_sucursal: number;
}
