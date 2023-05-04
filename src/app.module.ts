import { Module } from '@nestjs/common';
import { UsuarioModule } from './modules/usuario/usuario.module';
import { VacinaModule } from './modules/vacina/vacina.module';
import { DependenteModule } from './modules/dependente/dependente.module';

@Module({
  imports: [UsuarioModule, VacinaModule, DependenteModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
