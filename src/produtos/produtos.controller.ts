import { Controller, Get, Param } from '@nestjs/common';
import { ProdutosService } from './produtos.service.js';

@Controller('produtos')
export class ProdutosController {
  constructor(private readonly produtosService: ProdutosService) {}

  @Get(':id')
  buscarPorId(@Param('id') id: string) {
    return (this.produtosService as any).buscarPorId(id);
  }
}