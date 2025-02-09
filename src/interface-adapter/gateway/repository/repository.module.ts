import { Module } from '@nestjs/common';
import { mailRepository } from './mail.repository';

@Module({
  imports: [],
  providers: [
    {
      provide: 'IMailRepository',
      useClass: mailRepository,
    },
  ],
  exports: ['IMailRepository'],
})
export class RepositoryModule {}
