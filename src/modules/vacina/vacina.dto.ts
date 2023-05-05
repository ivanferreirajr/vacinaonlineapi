export class VacinaDto {
  id?: number;
  codigo: string;
  nome: string;
  lote: string;
  pacienteId: number;
  data_vencimento: Date;
  data_vacinacao: Date;
  createdAt?: Date;
  updatedAt?: Date;
}
