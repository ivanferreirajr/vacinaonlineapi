import { Injectable } from '@nestjs/common';
import { PacienteDto } from './paciente.dto';
import { PrismaService } from '../../../database/prisma.service';

@Injectable()
export class PacienteService {
  constructor(private prisma: PrismaService) {}

  async create(createPacienteDto: PacienteDto) {
    const user = await this.prisma.paciente.create({
      data: createPacienteDto,
    });
    return user;
  }

  async findAll() {
    const users = await this.prisma.paciente.findMany();
    return users;
  }

  async findOne(id: number) {
    const user = await this.prisma.paciente.findUnique({
      where: {
        id,
      },
    });
    return user;
  }

  async update(id: number, updatePacienteDto: PacienteDto) {
    const userExists = await this.prisma.paciente.findUnique({
      where: {
        id,
      },
    });
    if (!userExists) {
      throw new Error('User does not exists');
    }
    const user = await this.prisma.paciente.update({
      data: updatePacienteDto,
      where: {
        id,
      },
    });
    return user;
  }

  async remove(id: number) {
    const userExists = await this.prisma.paciente.findUnique({
      where: {
        id,
      },
    });
    if (!userExists) {
      throw new Error('User does not exists');
    }
    const user = await this.prisma.paciente.delete({
      where: {
        id,
      },
    });
    return user;
  }
}
