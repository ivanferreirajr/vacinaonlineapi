import { Module } from '@nestjs/common';
import { UsuarioModule } from './modules/usuario/usuario.module';
import { VacinaModule } from './modules/vacina/vacina.module';
import { AuthModule } from './modules/auth/auth.module';

@Module({
  imports: [UsuarioModule, VacinaModule, AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
