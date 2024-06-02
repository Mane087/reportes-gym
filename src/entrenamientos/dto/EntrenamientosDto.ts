import { Type } from 'class-transformer';
import { IsNotEmpty, IsDate, IsNumber} from 'class-validator';

export class EntrenamientosDto {
    @IsNotEmpty()
    @IsNumber()
    id_usuario: number;

    @IsNotEmpty()
    @IsNumber()
    id_entrenador: number;
   
    @IsNotEmpty()
    @IsNumber()
    id_sucursal: number;

    @IsNotEmpty()
    @IsDate()
    @Type(() => Date)
    fecha_inicio: Date;

    @IsNotEmpty()
    @IsDate()
    @Type(() => Date)
    fecha_fin: Date;
}
