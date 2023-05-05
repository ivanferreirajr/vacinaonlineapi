import { Module } from '@nestjs/common';
import { VacinaService } from './vacina.service';
import { VacinaController } from './vacina.controller';
import { PrismaService } from 'src/database/prisma.service';

@Module({
  controllers: [VacinaController],
  providers: [VacinaService, PrismaService],
})
export class VacinaModule {}
