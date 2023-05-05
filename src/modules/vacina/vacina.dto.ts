import { ApiProperty } from '@nestjs/swagger';

export class VacinaDto {
  @ApiProperty()
  id?: number;

  @ApiProperty()
  codigo: string;

  @ApiProperty()
  nome: string;

  @ApiProperty()
  lote: string;

  @ApiProperty()
  pacienteId: number;

  @ApiProperty()
  data_vencimento: Date;

  @ApiProperty()
  data_vacinacao: Date;

  createdAt?: Date;

  updatedAt?: Date;
}
