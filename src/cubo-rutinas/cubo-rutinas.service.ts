import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class CuboRutinasService {
    constructor(private prisma: PrismaService) {}

    async getDataPopuRutinas() {
        return this.prisma.rutinasUsuario.findMany();
    }
}
