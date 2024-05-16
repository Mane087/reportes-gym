import { Injectable } from '@nestjs/common';
import { CreatePopoularidadRutinaDto } from './dto/create-popoularidad-rutina.dto';
import { UpdatePopoularidadRutinaDto } from './dto/update-popoularidad-rutina.dto';

@Injectable()
export class PopoularidadRutinasService {
  create(createPopoularidadRutinaDto: CreatePopoularidadRutinaDto) {
    return 'This action adds a new popoularidadRutina';
  }

  findAll() {
    return `This action returns all popoularidadRutinas`;
  }

  findOne(id: number) {
    return `This action returns a #${id} popoularidadRutina`;
  }

  update(id: number, updatePopoularidadRutinaDto: UpdatePopoularidadRutinaDto) {
    return `This action updates a #${id} popoularidadRutina`;
  }

  remove(id: number) {
    return `This action removes a #${id} popoularidadRutina`;
  }
}
