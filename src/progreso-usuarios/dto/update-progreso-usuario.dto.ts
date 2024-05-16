import { PartialType } from '@nestjs/mapped-types';
import { CreateProgresoUsuarioDto } from './create-progreso-usuario.dto';

export class UpdateProgresoUsuarioDto extends PartialType(CreateProgresoUsuarioDto) {}
