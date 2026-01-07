import { IsOptional, IsString, IsBoolean } from 'class-validator';

export class UpdateStatusDto {
  @IsOptional()
  @IsString()
  nome?: string;

  @IsOptional()
  @IsString()
  categoria?: string;

  @IsOptional()
  @IsBoolean()
  ativo?: boolean;
}
