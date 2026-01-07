import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { StatusModule } from './status/status.module';

@Module({
  imports: [PrismaModule, StatusModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
