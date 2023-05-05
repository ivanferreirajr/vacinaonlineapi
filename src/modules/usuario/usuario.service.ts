import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { UsuarioDto } from './usuario.dto';
import { PrismaService } from '../../database/prisma.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsuarioService {
  constructor(private prisma: PrismaService) {}

  async create(createUsuarioDto: UsuarioDto) {
    const userExists = await this.prisma.usuario.findFirst({
      where: {
        OR: [
          {
            cpf: createUsuarioDto.cpf,
          },
          {
            email: createUsuarioDto.email,
          },
        ],
      },
    });
    if (userExists) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: 'User already exists',
        },
        HttpStatus.BAD_REQUEST,
      );
    }
    const hash = await bcrypt.hash(createUsuarioDto.senha, 10);
    const user = await this.prisma.usuario.create({
      data: {
        ...createUsuarioDto,
        senha: hash,
      },
    });
    user.senha = undefined;
    return user;
  }

  async findAll() {
    const users = await this.prisma.usuario.findMany();
    return users;
  }

  async findOne(id: number) {
    const user = await this.prisma.usuario.findUnique({
      where: {
        id,
      },
    });
    return user;
  }

  async findByEmail(email: string): Promise<UsuarioDto> {
    const user = await this.prisma.usuario.findUnique({
      where: {
        email,
      },
    });
    return user;
  }

  async update(id: number, updateUsuarioDto: UsuarioDto) {
    if (updateUsuarioDto.senha) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: 'Not allowed change password with this method',
        },
        HttpStatus.BAD_REQUEST,
      );
    }
    const userExists = await this.prisma.usuario.findUnique({
      where: {
        id,
      },
    });
    if (!userExists) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: 'User does not exists',
        },
        HttpStatus.BAD_REQUEST,
      );
    }
    const user = await this.prisma.usuario.update({
      data: updateUsuarioDto,
      where: {
        id,
      },
    });
    return user;
  }

  async remove(id: number) {
    const userExists = await this.prisma.usuario.findUnique({
      where: {
        id,
      },
    });
    if (!userExists) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: 'User does not exists',
        },
        HttpStatus.BAD_REQUEST,
      );
    }
    const user = await this.prisma.usuario.delete({
      where: {
        id,
      },
    });
    return user;
  }
}
