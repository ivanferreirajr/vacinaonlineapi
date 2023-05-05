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

  // TODO: rota para troca de senha
}
