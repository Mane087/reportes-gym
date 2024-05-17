import { IsNotEmpty, IsString } from 'class-validator';

export class UsuariosDto {
  @IsNotEmpty()
  @IsString()
  nombre: string;

  @IsNotEmpty()
  @IsString()
  apellido: string;
}
