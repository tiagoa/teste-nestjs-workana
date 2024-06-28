import { Controller, Get, Query } from '@nestjs/common';
import { CepService } from './cep.service';

@Controller('cep')
export class CepController {
  constructor(private readonly cepService: CepService) {}
  @Get()
  async getAddressByCep(@Query('cep') cep: string) {
    return this.cepService.getAddressByCep(cep);
  }
}
