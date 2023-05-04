import { Module } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { UsuarioController } from './usuario.controller';
import { PrismaService } from '../../database/prisma.service';
import { PacienteService } from './paciente/paciente.service';
import { EnfermeiroService } from './enfermeiro/enfermeiro.service';

@Module({
  controllers: [UsuarioController],
  providers: [
    UsuarioService,
    PrismaService,
    PacienteService,
    EnfermeiroService,
  ],
})
export class UsuarioModule {}
