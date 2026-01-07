import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { StatusModule } from './status/status.module';
import { PrioridadeModule } from './prioridade/prioridade.module';

@Module({
  imports: [PrismaModule, StatusModule, PrioridadeModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
