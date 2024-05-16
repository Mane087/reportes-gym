import { PartialType } from '@nestjs/mapped-types';
import { CreatePopoularidadRutinaDto } from './create-popoularidad-rutina.dto';

export class UpdatePopoularidadRutinaDto extends PartialType(CreatePopoularidadRutinaDto) {}
