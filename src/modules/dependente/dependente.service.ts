import { Injectable } from '@nestjs/common';
import { DependenteDto } from './dependente.dto';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class DependenteService {
  constructor(private prisma: PrismaService) {}

  async create(createDependenteDto: DependenteDto) {
    const dependentExists = await this.prisma.dependente.findFirst({
      where: {
        cpf: createDependenteDto.cpf,
      },
    });
    if (dependentExists) {
      throw new Error('dependent already exists');
    }
    const dependent = await this.prisma.dependente.create({
      data: createDependenteDto,
    });
    return dependent;
  }

  async findAll() {
    const dependents = await this.prisma.dependente.findMany();
    return dependents;
  }

  async findOne(id: number) {
    const dependent = await this.prisma.dependente.findUnique({
      where: {
        id,
      },
    });
    return dependent;
  }

  async update(id: number, updateDependenteDto: DependenteDto) {
    const dependentExists = await this.prisma.dependente.findUnique({
      where: {
        id,
      },
    });
    if (!dependentExists) {
      throw new Error('dependent does not exists');
    }
    const dependent = await this.prisma.dependente.update({
      data: updateDependenteDto,
      where: {
        id,
      },
    });
    return dependent;
  }

  async remove(id: number) {
    const dependentExists = await this.prisma.dependente.findUnique({
      where: {
        id,
      },
    });
    if (!dependentExists) {
      throw new Error('dependent does not exists');
    }
    const dependent = await this.prisma.dependente.delete({
      where: {
        id,
      },
    });
    return dependent;
  }
}
