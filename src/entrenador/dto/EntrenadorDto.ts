import { IsNotEmpty, IsString} from 'class-validator';

export class EntrenadorDto {
    @IsNotEmpty()
    @IsString()
    nombre: string;

    @IsNotEmpty()
    @IsString()
    apellido: string;
}