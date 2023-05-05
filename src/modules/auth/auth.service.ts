import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { UsuarioDto } from '../usuario/usuario.dto';
import { UsuarioService } from '../usuario/usuario.service';

@Injectable()
export class AuthService {
  constructor(
    private usuarioService: UsuarioService,
    private jwtService: JwtService,
  ) {}

  async login(email: string, password: string) {
    const user = await this.validateCredentials(email, password);

    const payload = {
      sub: user.id,
      email: user.email,
      role: user.tipo,
    };

    const token = this.jwtService.sign(payload);

    return { token, user };
  }

  async validateCredentials(email: string, senha: string): Promise<UsuarioDto> {
    const user = await this.usuarioService.findByEmail(email);

    if (!user) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: 'User not found',
        },
        HttpStatus.BAD_REQUEST,
      );
    }

    const confirm = await bcrypt.compareSync(senha, user.senha);

    if (!confirm) {
      throw new HttpException(
        {
          status: HttpStatus.FORBIDDEN,
          error: 'Invalid credentials',
        },
        HttpStatus.FORBIDDEN,
      );
    }

    return user;
  }
}
