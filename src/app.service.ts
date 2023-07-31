import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello() {
    return {
      estado: 'ok',
      mensagem: 'API esta no ar',
    };
  }
}
