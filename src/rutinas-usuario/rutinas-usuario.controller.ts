import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
  Query,
} from '@nestjs/common';
import { RutinasUsuarioService } from './rutinas-usuario.service';
import { RutinasUsuarioDto } from './dto/RutinasUsuarioDto';
import { ApiTags } from '@nestjs/swagger';

@Controller('rutinas-usuario')
@ApiTags('rutinas-usuario')
export class RutinasUsuarioController {
  constructor(private readonly rutinasUsuarioService: RutinasUsuarioService) {}

  @Post()
  create(@Body() rutinaUsuario: RutinasUsuarioDto) {
    return this.rutinasUsuarioService.createRutinaUsuario(rutinaUsuario);
  }

  @Get()
  getRutinaUsuarios() {
    return this.rutinasUsuarioService.getRutinaUsuarios();
  }

  @Get('rutinaBySatisfaccion/:id')
  GetRutinaUsuarioBySatisdfaccion(
    @Param('id', ParseIntPipe) id: number,
    @Query('satisfaccion', ParseIntPipe) satisfaccion: number,
  ) {
    return this.rutinasUsuarioService.GetRutinaUsuarioBySatisfaccion(
      id,
      satisfaccion,
    );
  }

  @Get('rutinaById/:id')
  GetRutinaUsuarioById(@Param('id', ParseIntPipe) id: number) {
    return this.rutinasUsuarioService.GetRutinaUsuarioById(id);
  }

  @Get('rutinaByDate')
  GetRutinaUsuarioByDate(
    @Query('fecha_inicio') fecha_inicio: string,
    @Query('fecha_fin') fecha_fin: string,
  ) {
    const start = new Date(fecha_inicio);
    const end = new Date(fecha_fin);
    console.log('data de fecha', start, end);
    return this.rutinasUsuarioService.GetRutinaUsuarioByDate(start, end);
  }

  @Get('mes-actual')
  async getClientesPorRutinaYEntrenadorMesActual() {
    const groupedData =
      await this.rutinasUsuarioService.getClientesPorRutinaYEntrenadorMesActual();

    const result = {};

    for (const item of groupedData) {
      const entrenador = await this.rutinasUsuarioService.getEntrenadorById(
        item.id_entrenador,
      );

      for (const es of entrenador.EntrenadoresSucursales) {
        const sucursalNombre = es.sucursal.nombre;

        if (!result[sucursalNombre]) {
          result[sucursalNombre] = {};
        }

        if (!result[sucursalNombre][entrenador.id_entrenador]) {
          result[sucursalNombre][entrenador.id_entrenador] = {
            entrenador: {
              id: entrenador.id_entrenador,
              nombre: entrenador.nombre,
              apellido: entrenador.apellido,
            },
            count: 0,
          };
        }

        result[sucursalNombre][entrenador.id_entrenador].count +=
          item._count.id_usuario;
      }
    }

    const formattedResult = Object.entries(result).map(
      ([sucursal, entrenadores]) => {
        return {
          sucursal,
          entrenadores: Object.values(entrenadores),
        };
      },
    );

    return formattedResult;
  }

  @Get('ultimos-seis-meses')
  async getClientesPorEntrenadorYSucursalUltimosSeisMeses() {
    const groupedData =
      await this.rutinasUsuarioService.getClientesPorEntrenadorYSucursalUltimosSeisMeses();

    const result = {};

    for (const item of groupedData) {
      const entrenador = await this.rutinasUsuarioService.getEntrenadorById(
        item.id_entrenador,
      );

      for (const es of entrenador.EntrenadoresSucursales) {
        const sucursalNombre = es.sucursal.nombre;

        if (!result[sucursalNombre]) {
          result[sucursalNombre] = {};
        }

        if (!result[sucursalNombre][entrenador.id_entrenador]) {
          result[sucursalNombre][entrenador.id_entrenador] = {
            entrenador: {
              id: entrenador.id_entrenador,
              nombre: entrenador.nombre,
              apellido: entrenador.apellido,
            },
            count: 0,
          };
        }

        result[sucursalNombre][entrenador.id_entrenador].count +=
          item._count.id_usuario;
      }
    }

    const formattedResult = Object.entries(result).map(
      ([sucursal, entrenadores]) => {
        return {
          sucursal,
          entrenadores: Object.values(entrenadores),
        };
      },
    );

    return formattedResult;
  }

  // el conteo esta mal
  @Get('anual')
  async getClientesPorEntrenadorYSucursalAnual() {
    const groupedData =
      await this.rutinasUsuarioService.getClientesPorEntrenadorYSucursalAnual();

    const result = {};

    for (const item of groupedData) {
      const entrenador = await this.rutinasUsuarioService.getEntrenadorById(
        item.id_entrenador,
      );

      for (const es of entrenador.EntrenadoresSucursales) {
        const sucursalNombre = es.sucursal.nombre;

        if (!result[sucursalNombre]) {
          result[sucursalNombre] = {};
        }

        if (!result[sucursalNombre][entrenador.id_entrenador]) {
          result[sucursalNombre][entrenador.id_entrenador] = {
            entrenador: {
              id: entrenador.id_entrenador,
              nombre: entrenador.nombre,
              apellido: entrenador.apellido,
            },
            count: 0,
          };
        }

        result[sucursalNombre][entrenador.id_entrenador].count +=
          item._count.id_usuario;
      }
    }

    const formattedResult = Object.entries(result).map(
      ([sucursal, entrenadores]) => {
        return {
          sucursal,
          entrenadores: Object.values(entrenadores),
        };
      },
    );

    return formattedResult;
  }

// el conteo esta mal
  @Get('entrenador/:id')
  async getEntrenadorById(
    @Param('id', ParseIntPipe) id: number,
    @Query('periodo', ParseIntPipe) periodo: number,
  ) {
    let groupedData;
    if (periodo == 1) {
      groupedData =
        await this.rutinasUsuarioService.getClientesPorEntrenadorYSucursalUltimosSeisMesesWithIdTrainer(
          id,
        );
    } else if (periodo == 2) {
      groupedData =
        await this.rutinasUsuarioService.getClientesPorEntrenadorYSucursalUltimosSeisMesesWithIdTrainer(
          id,
        ); // Ajuste para obtener datos anuales
    } else {
      groupedData =
        await this.rutinasUsuarioService.getClientesPorRutinaYEntrenadorMesActual(); // Ajuste para obtener datos del mes actual
    }

    const result = {};

    const entrenador = await this.rutinasUsuarioService.getEntrenadorById(id);

    for (const item of groupedData) {
      for (const es of entrenador.EntrenadoresSucursales) {
        const sucursalNombre = es.sucursal.nombre;

        if (!result[sucursalNombre]) {
          result[sucursalNombre] = {};
        }

        if (!result[sucursalNombre][entrenador.id_entrenador]) {
          result[sucursalNombre][entrenador.id_entrenador] = {
            entrenador: {
              id: entrenador.id_entrenador,
              nombre: entrenador.nombre,
              apellido: entrenador.apellido,
            },
            count: 0,
          };
        }

        result[sucursalNombre][entrenador.id_entrenador].count +=
          item._count.id_usuario;
      }
    }

    const formattedResult = Object.entries(result).map(
      ([sucursal, entrenadores]) => {
        return {
          sucursal,
          entrenadores: Object.values(entrenadores),
        };
      },
    );

    return formattedResult;
  }


  // devuelve a todos los entrenadores y el conteo esta mal
  @Get('sucursal/:id')
  async getClientesPorSucursal(
    @Param('id', ParseIntPipe) id: number,
    @Query('periodo', ParseIntPipe) periodo: number,
  ) {
    let groupedData;
    if (periodo === 1) {
      groupedData =
        await this.rutinasUsuarioService.getClientesPorEntrenadorYSucursalUltimosSeisMeses();
    } else if (periodo === 2) {
      groupedData =
        await this.rutinasUsuarioService.getClientesPorEntrenadorYSucursalUltimosSeisMeses();
    } else {
      groupedData =
        await this.rutinasUsuarioService.getClientesPorRutinaYEntrenadorMesActual();
    }

    const result = {};

    for (const item of groupedData) {
      const entrenador = await this.rutinasUsuarioService.getEntrenadorById(
        item.id_entrenador,
      );

      const sucursalNombre = (
        await this.rutinasUsuarioService.getSucursalById(id)
      ).nombre;

      if (!result[sucursalNombre]) {
        result[sucursalNombre] = {};
      }

      if (!result[sucursalNombre][entrenador.id_entrenador]) {
        result[sucursalNombre][entrenador.id_entrenador] = {
          entrenador: {
            id: entrenador.id_entrenador,
            nombre: entrenador.nombre,
            apellido: entrenador.apellido,
          },
          count: 0,
        };
      }

      result[sucursalNombre][entrenador.id_entrenador].count +=
        item._count.id_usuario;
    }

    const formattedResult = Object.entries(result).map(
      ([sucursal, entrenadores]) => {
        return {
          sucursal,
          entrenadores: Object.values(entrenadores),
        };
      },
    );

    return formattedResult;
  }
}
