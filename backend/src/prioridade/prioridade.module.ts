import { Module } from '@nestjs/common';
import { PrioridadeController } from './prioridade.controller';
import { PrioridadeService } from './prioridade.service';

@Module({
  controllers: [PrioridadeController],
  providers: [PrioridadeService]
})
export class PrioridadeModule {}
