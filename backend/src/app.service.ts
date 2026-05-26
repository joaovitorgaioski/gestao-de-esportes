import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
<<<<<<< HEAD
    return 'Hello mundo!';
=======
    return 'Hello World!';
>>>>>>> f2bb91c (feat: inicia backend com NestJS e Prisma)
  }
}
