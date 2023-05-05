import { Module } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { UsuarioController } from './usuario.controller';
import { PrismaService } from '../../database/prisma.service';
import { EnderecoService } from './endereco/endereco.service';

@Module({
  controllers: [UsuarioController],
  providers: [UsuarioService, PrismaService, EnderecoService],
  exports: [UsuarioService],
})
export class UsuarioModule {}
