import { Type } from 'class-transformer';
import { IsNotEmpty, IsString, IsNumber, IsDate} from 'class-validator';

export class ProgresoDto {
    @IsNotEmpty()
    @IsNumber()
    id_usuario: number;

    @IsNotEmpty()
    @IsDate()
    @Type(() => Date) 
    fecha: Date;

    @IsNotEmpty()
    @IsNumber()
    peso: number;

    @IsNotEmpty()
    @IsNumber()
    grasa_corporal: number;

    @IsNotEmpty()
    @IsNumber()
    musculo: number;

}