import { Injectable } from '@nestjs/common';
import { CreateProgresoUsuarioDto } from './dto/create-progreso-usuario.dto';
import { UpdateProgresoUsuarioDto } from './dto/update-progreso-usuario.dto';

@Injectable()
export class ProgresoUsuariosService {
  create(createProgresoUsuarioDto: CreateProgresoUsuarioDto) {
    return 'This action adds a new progresoUsuario';
  }

  findAll() {
    return `This action returns all progresoUsuarios`;
  }

  findOne(id: number) {
    return `This action returns a #${id} progresoUsuario`;
  }

  update(id: number, updateProgresoUsuarioDto: UpdateProgresoUsuarioDto) {
    return `This action updates a #${id} progresoUsuario`;
  }

  remove(id: number) {
    return `This action removes a #${id} progresoUsuario`;
  }
}
