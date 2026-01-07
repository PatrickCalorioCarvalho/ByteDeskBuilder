import { Controller, Get, Post, Body, Param, Patch, Delete } from '@nestjs/common';
import { StatusService } from './status.service';
import { CreateStatusDto } from './dto/create-status.dto';
import { UpdateStatusDto } from './dto/update-status.dto';

@Controller('status')
export class StatusController {
  constructor(private readonly service: StatusService) {}

  @Post()
  criar(@Body() dto: CreateStatusDto) {
    return this.service.criar(dto);
  }

  @Get()
  listar() {
    return this.service.listar();
  }

  @Get(':id')
  obter(@Param('id') id: string) {
    return this.service.obter(Number(id));
  }

  @Patch(':id')
  atualizar(
    @Param('id') id: string,
    @Body() dto: UpdateStatusDto,
  ) {
    return this.service.atualizar(Number(id), dto);
  }

  @Delete(':id')
  remover(@Param('id') id: string) {
    return this.service.remover(Number(id));
  }
}
