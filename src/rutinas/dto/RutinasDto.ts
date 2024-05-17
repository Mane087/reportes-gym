import { IsNotEmpty, IsString, IsNumber, IsDate} from 'class-validator';

export class RutinasDto {
    @IsNotEmpty()
    @IsString()
    nombre: string;
}