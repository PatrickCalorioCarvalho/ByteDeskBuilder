import { IsString, IsOptional, IsInt, IsBoolean } from 'class-validator';

export class CreatePrioridadeDto {
  @IsString()
  nome: string;

  @IsOptional()
  @IsString()
  descricao?: string;

  @IsOptional()
  @IsInt()
  nivel?: number;

  @IsOptional()
  @IsBoolean()
  ativo?: boolean;
}
