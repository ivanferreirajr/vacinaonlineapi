import { Module } from '@nestjs/common';
import { EnderecoService } from './endereco.service';
import { PrismaService } from 'src/database/prisma.service';

@Module({
  providers: [EnderecoService, PrismaService],
  exports: [EnderecoService],
})
export class UsuarioModule {}
