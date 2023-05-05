import { ApiProperty } from '@nestjs/swagger';

export class UsuarioDto {
  @ApiProperty()
  id?: number;

  @ApiProperty()
  email: string;

  @ApiProperty()
  senha: string;

  @ApiProperty()
  cpf: string;

  @ApiProperty()
  telefone?: string;

  @ApiProperty()
  data_nascimento: Date;

  @ApiProperty()
  coren?: string;

  @ApiProperty()
  tipo?: string;

  createdAt?: Date;

  updatedAt?: Date;
}
