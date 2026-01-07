import "dotenv/config";
import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateStatusDto } from './dto/create-status.dto';
import { UpdateStatusDto } from './dto/update-status.dto';

@Injectable()
export class StatusService {
  constructor(private prisma: PrismaService) {}

  criar(dto: CreateStatusDto) {
    return this.prisma.statusTicket.create({
      data: dto,
    });
  }

  listar() {
    return this.prisma.statusTicket.findMany({
      where: { deletadoEm: null },
      orderBy: { id: 'asc' },
    });
  }

  async obter(id: number) {
    const status = await this.prisma.statusTicket.findFirst({
      where: { id, deletadoEm: null },
    });

    if (!status) throw new NotFoundException('Status não encontrado');
    return status;
  }

  atualizar(id: number, dto: UpdateStatusDto) {
    return this.prisma.statusTicket.update({
      where: { id },
      data: dto,
    });
  }

  remover(id: number) {
    return this.prisma.statusTicket.update({
      where: { id },
      data: { deletadoEm: new Date() },
    });
  }
}
