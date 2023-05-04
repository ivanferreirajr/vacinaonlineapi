import { Injectable } from '@nestjs/common';
import { VacinaDto } from './vacina.dto';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class VacinaService {
  constructor(private prisma: PrismaService) {}

  async create(createVacinaDto: VacinaDto) {
    const vaccineExists = await this.prisma.vacina.findFirst({
      where: {
        codigo: createVacinaDto.codigo,
      },
    });
    if (vaccineExists) {
      throw new Error('Vaccine already exists');
    }
    const vaccine = await this.prisma.vacina.create({
      data: createVacinaDto,
    });
    return vaccine;
  }

  async findAll() {
    const vaccines = await this.prisma.vacina.findMany();
    return vaccines;
  }

  async findOne(id: number) {
    const vaccine = await this.prisma.vacina.findUnique({
      where: {
        id,
      },
    });
    return vaccine;
  }

  async update(id: number, updateVacinaDto: VacinaDto) {
    const vaccineExists = await this.prisma.vacina.findUnique({
      where: {
        id,
      },
    });
    if (!vaccineExists) {
      throw new Error('Vaccine does not exists');
    }
    const vaccine = await this.prisma.vacina.update({
      data: updateVacinaDto,
      where: {
        id,
      },
    });
    return vaccine;
  }

  async remove(id: number) {
    const vaccineExists = await this.prisma.vacina.findUnique({
      where: {
        id,
      },
    });
    if (!vaccineExists) {
      throw new Error('Vaccine does not exists');
    }
    const vaccine = await this.prisma.vacina.delete({
      where: {
        id,
      },
    });
    return vaccine;
  }
}
