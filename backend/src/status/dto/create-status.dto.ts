import { IsString, IsNotEmpty } from 'class-validator';

export class CreateStatusDto {
  @IsString()
  @IsNotEmpty()
  nome: string;

  @IsString()
  categoria: string;
}
