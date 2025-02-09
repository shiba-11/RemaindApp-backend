import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MailController } from './interface-adapter/controller/mail.controller';
import { SendMail } from './usecase/mail.usecase';
import { MailEntity } from './domain/mail.entity';
import { RepositoryModule } from './interface-adapter/gateway/repository/repository.module';
// import { MailEntity } from './domain/mail.entity';

@Module({
  imports: [RepositoryModule],
  controllers: [AppController, MailController],
  providers: [AppService, SendMail, MailEntity],
})
export class AppModule {}
