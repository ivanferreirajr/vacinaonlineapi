export class UsuarioDto {
  id?: number;
  email: string;
  senha: string;
  cpf: string;
  telefone?: string;
  data_nascimento: Date;
  coren?: string;
  tipo?: string;
  createdAt?: Date;
  updatedAt?: Date;
}
