import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { DependenteService } from './dependente.service';
import { DependenteDto } from './dependente.dto';

@Controller('dependente')
export class DependenteController {
  constructor(private readonly dependenteService: DependenteService) {}

  @Post()
  create(@Body() createDependenteDto: DependenteDto) {
    return this.dependenteService.create(createDependenteDto);
  }

  @Get()
  findAll() {
    return this.dependenteService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.dependenteService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDependenteDto: DependenteDto) {
    return this.dependenteService.update(+id, updateDependenteDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.dependenteService.remove(+id);
  }
}
