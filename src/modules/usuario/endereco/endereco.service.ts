import { Injectable } from '@nestjs/common';
import { EnderecoDto } from './endereco.dto';
import { PrismaService } from '../../../database/prisma.service';

@Injectable()
export class EnderecoService {
  constructor(private prisma: PrismaService) {}

  async create(createEnderecoDto: EnderecoDto) {
    const address = await this.prisma.endereco.create({
      data: createEnderecoDto,
    });
    return address;
  }

  async findOne(id: number) {
    const address = await this.prisma.endereco.findFirst({
      where: {
        id,
      },
    });
    return address;
  }

  async update(id: number, updateEnderecoDto: EnderecoDto) {
    const addressExists = await this.prisma.endereco.findUnique({
      where: {
        id,
      },
    });
    if (!addressExists) {
      throw new Error('Address does not exists');
    }
    const address = await this.prisma.endereco.update({
      data: updateEnderecoDto,
      where: {
        id,
      },
    });
    return address;
  }

  async remove(id: number) {
    const addressExists = await this.prisma.endereco.findUnique({
      where: {
        id,
      },
    });
    if (!addressExists) {
      throw new Error('Address does not exists');
    }
    const address = await this.prisma.endereco.delete({
      where: {
        id,
      },
    });
    return address;
  }
}
