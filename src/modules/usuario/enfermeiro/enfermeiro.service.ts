import { Injectable } from '@nestjs/common';
import { EnfermeiroDto } from './enfermeiro.dto';
import { PrismaService } from '../../../database/prisma.service';

@Injectable()
export class EnfermeiroService {
  constructor(private prisma: PrismaService) {}

  async create(createEnfermeiroDto: EnfermeiroDto) {
    const user = await this.prisma.enfermeiro.create({
      data: createEnfermeiroDto,
    });
    return user;
  }

  async findAll() {
    const users = await this.prisma.enfermeiro.findMany();
    return users;
  }

  async findOne(id: number) {
    const user = await this.prisma.enfermeiro.findUnique({
      where: {
        id,
      },
    });
    return user;
  }

  async update(id: number, updateEnfermeiroDto: EnfermeiroDto) {
    const userExists = await this.prisma.enfermeiro.findUnique({
      where: {
        id,
      },
    });
    if (!userExists) {
      throw new Error('User does not exists');
    }
    const user = await this.prisma.enfermeiro.update({
      data: updateEnfermeiroDto,
      where: {
        id,
      },
    });
    return user;
  }

  async remove(id: number) {
    const userExists = await this.prisma.enfermeiro.findUnique({
      where: {
        id,
      },
    });
    if (!userExists) {
      throw new Error('User does not exists');
    }
    const user = await this.prisma.enfermeiro.delete({
      where: {
        id,
      },
    });
    return user;
  }
}
