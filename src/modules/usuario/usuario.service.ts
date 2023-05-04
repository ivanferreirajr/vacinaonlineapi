import { Injectable } from '@nestjs/common';
import { UsuarioDto } from './usuario.dto';
import { PrismaService } from '../../database/prisma.service';

@Injectable()
export class UsuarioService {
  constructor(private prisma: PrismaService) {}

  // TODO: create services to paciente and enfermeiro
  async create(createUsuarioDto: UsuarioDto) {
    const userExists = await this.prisma.usuario.findFirst({
      where: {
        cpf: createUsuarioDto.cpf,
      },
    });
    if (userExists) {
      throw new Error('User already exists');
    }
    const user = await this.prisma.usuario.create({
      data: createUsuarioDto,
    });
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

  async update(id: number, updateUsuarioDto: UsuarioDto) {
    const userExists = await this.prisma.usuario.findUnique({
      where: {
        id,
      },
    });
    if (!userExists) {
      throw new Error('User does not exists');
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
      throw new Error('User does not exists');
    }
    const user = await this.prisma.usuario.delete({
      where: {
        id,
      },
    });
    return user;
  }
}
