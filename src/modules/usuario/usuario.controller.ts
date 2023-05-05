import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { UsuarioDto } from './usuario.dto';
import { ApiOperation } from '@nestjs/swagger';
import { EnderecoDto } from './endereco/endereco.dto';

@Controller('usuarios')
export class UsuarioController {
  constructor(private readonly usuarioService: UsuarioService) {}

  @Post()
  @ApiOperation({ summary: 'Create a user', tags: ['User'] })
  create(@Body() createUsuarioDto: UsuarioDto) {
    return this.usuarioService.create(createUsuarioDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all users', tags: ['User'] })
  findAll() {
    return this.usuarioService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a user by id', tags: ['User'] })
  findOne(@Param('id') id: string) {
    return this.usuarioService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update a user', tags: ['User'] })
  update(@Param('id') id: string, @Body() updateUsuarioDto: UsuarioDto) {
    return this.usuarioService.update(+id, updateUsuarioDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Remove a user', tags: ['User'] })
  remove(@Param('id') id: string) {
    return this.usuarioService.remove(+id);
  }

  @Post(':id/endereco')
  @ApiOperation({ summary: 'Create user address', tags: ['Address'] })
  createAddress(
    @Param('id') id: string,
    @Body() createEnderecoDto: EnderecoDto,
  ) {
    return this.usuarioService.createAddress(+id, createEnderecoDto);
  }

  @Get(':id/endereco')
  @ApiOperation({ summary: 'Retrieve user address', tags: ['Address'] })
  findAddress(@Param('id') id: string) {
    return this.usuarioService.findAddress(+id);
  }

  @Post(':id/doencas')
  @ApiOperation({
    summary: 'Create user chronic diseases',
    tags: ['Chronic Diseases'],
  })
  createChronicDiseases(
    @Param('id') id: string,
    @Body() chronicDiseases: string,
  ) {
    return this.usuarioService.createChronicDiseases(+id, chronicDiseases);
  }

  @Delete(':id/doencas/:index')
  @ApiOperation({
    summary: 'Delete user chronic diseases',
    tags: ['Chronic Diseases'],
  })
  removeChronicDiseases(
    @Param('id') id: string,
    @Param('index') index: string,
  ) {
    return this.usuarioService.removeChronicDiseases(+id, +index);
  }

  @Post(':id/alergias')
  @ApiOperation({ summary: 'Create user allergy', tags: ['Allergy'] })
  createAllergies(@Param('id') id: string, @Body() allergy: string) {
    return this.usuarioService.createAllergies(+id, allergy);
  }

  @Delete(':id/alergias/:index')
  @ApiOperation({ summary: 'Delete user allergy', tags: ['Allergy'] })
  removeAllergies(@Param('id') id: string, @Param('index') index: string) {
    return this.usuarioService.removeAllergies(+id, +index);
  }
}
