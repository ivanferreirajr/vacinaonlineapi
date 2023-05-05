import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { VacinaService } from './vacina.service';
import { VacinaDto } from './vacina.dto';

@Controller('vacina')
export class VacinaController {
  constructor(private readonly vacinaService: VacinaService) {}

  @Post()
  create(@Body() createVacinaDto: VacinaDto) {
    return this.vacinaService.create(createVacinaDto);
  }

  @Get()
  findAll() {
    return this.vacinaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.vacinaService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateVacinaDto: VacinaDto) {
    return this.vacinaService.update(+id, updateVacinaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.vacinaService.remove(+id);
  }
}
