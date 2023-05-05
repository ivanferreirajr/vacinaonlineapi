import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { UsuarioDto } from './usuario.dto';
import { PrismaService } from '../../database/prisma.service';
import * as bcrypt from 'bcrypt';
import { EnderecoService } from './endereco/endereco.service';
import { EnderecoDto } from './endereco/endereco.dto';

@Injectable()
export class UsuarioService {
  constructor(
    private prisma: PrismaService,
    private enderecoService: EnderecoService,
  ) {}

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

  async createAddress(id: number, createEnderecoDto: EnderecoDto) {
    const address = await this.enderecoService.create(createEnderecoDto);
    return address;
  }

  async findAddress(id: number) {
    const address = await this.enderecoService.findOne(id);
    return address;
  }

  async createChronicDiseases(id: number, chronicDiseases: string) {
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
      data: {
        doencas_cronicas: chronicDiseases,
      },
      where: {
        id,
      },
    });
    return user;
  }

  async removeChronicDiseases(id: number, index: number) {
    const users = await this.prisma.usuario.findUnique({
      where: {
        id,
      },
    });
    return users;
  }

  async createAllergies(id: number, allergy: string) {
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
      data: {
        alergias: allergy,
      },
      where: {
        id,
      },
    });
    return user;
  }

  async removeAllergies(id: number, index: number) {
    const users = await this.prisma.usuario.findUnique({
      where: {
        id,
      },
    });
    return users;
  }
}
