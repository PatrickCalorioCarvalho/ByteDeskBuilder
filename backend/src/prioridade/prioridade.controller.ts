import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
} from '@nestjs/common';
import { PrioridadeService } from './prioridade.service';
import { CreatePrioridadeDto } from './dto/create-prioridade.dto';
import { UpdatePrioridadeDto } from './dto/update-prioridade.dto';

@Controller('prioridades')
export class PrioridadeController {
  constructor(private readonly service: PrioridadeService) {}

  @Post()
  create(@Body() dto: CreatePrioridadeDto) {
    return this.service.create(dto);
  }

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.service.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: UpdatePrioridadeDto,
  ) {
    return this.service.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.service.remove(id);
  }
}
