import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  welcomeMsg(): string {
    return 'CodeBank REST API server';
  }
}
