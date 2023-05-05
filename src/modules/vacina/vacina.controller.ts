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
import { ApiOperation } from '@nestjs/swagger';

@Controller('vacina')
export class VacinaController {
  constructor(private readonly vacinaService: VacinaService) {}

  @Post()
  @ApiOperation({ summary: 'Create a vaccine', tags: ['Vaccine'] })
  create(@Body() createVacinaDto: VacinaDto) {
    return this.vacinaService.create(createVacinaDto);
  }

  @Get()
  @ApiOperation({ summary: 'Retrive all vaccines', tags: ['Vaccine'] })
  findAll() {
    return this.vacinaService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a vaccine by id', tags: ['Vaccine'] })
  findOne(@Param('id') id: string) {
    return this.vacinaService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update a vaccine', tags: ['Vaccine'] })
  update(@Param('id') id: string, @Body() updateVacinaDto: VacinaDto) {
    return this.vacinaService.update(+id, updateVacinaDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a vaccine', tags: ['Vaccine'] })
  remove(@Param('id') id: string) {
    return this.vacinaService.remove(+id);
  }
}
