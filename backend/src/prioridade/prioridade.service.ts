import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreatePrioridadeDto } from './dto/create-prioridade.dto';
import { UpdatePrioridadeDto } from './dto/update-prioridade.dto';

@Injectable()
export class PrioridadeService {
  constructor(private prisma: PrismaService) {}

  create(dto: CreatePrioridadeDto, usuarioId = 1) {
    return this.prisma.prioridadeTicket.create({
      data: {
        ...dto,
        criadoPor: usuarioId,
        alteradoPor: usuarioId,
      },
    });
  }

  findAll() {
    return this.prisma.prioridadeTicket.findMany({
      where: { deletadoEm: null },
      orderBy: { nivel: 'asc' },
    });
  }

  async findOne(id: number) {
    const prioridade = await this.prisma.prioridadeTicket.findFirst({
      where: { id, deletadoEm: null },
    });

    if (!prioridade) {
      throw new NotFoundException('Prioridade não encontrada');
    }

    return prioridade;
  }

  async update(
    id: number,
    dto: UpdatePrioridadeDto,
    usuarioId = 1,
  ) {
    await this.findOne(id);

    return this.prisma.prioridadeTicket.update({
      where: { id },
      data: {
        ...dto,
        alteradoPor: usuarioId,
      },
    });
  }

  async remove(id: number, usuarioId = 1) {
    await this.findOne(id);

    return this.prisma.prioridadeTicket.update({
      where: { id },
      data: {
        deletadoEm: new Date(),
        alteradoPor: usuarioId,
      },
    });
  }
}
