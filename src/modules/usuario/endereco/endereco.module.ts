import { Module } from '@nestjs/common';
import { EnderecoService } from './endereco.service';
import { PrismaService } from 'src/database/prisma.service';

@Module({
  providers: [EnderecoService, PrismaService],
})
export class UsuarioModule {}
