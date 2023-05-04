import { Module } from '@nestjs/common';
import { DependenteService } from './dependente.service';
import { DependenteController } from './dependente.controller';

@Module({
  controllers: [DependenteController],
  providers: [DependenteService],
})
export class DependenteModule {}
