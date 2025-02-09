import { Inject, Injectable } from '@nestjs/common';
// import { mailDto } from 'src/interface-adapter/dto/mail.dto';

export interface IEmail {
  to: string;
  subject: string;
  text: string;
}

export interface IMailRepository {
  sendMail(mail: IEmail);
}

@Injectable()
export class MailEntity {
  constructor(
    @Inject('IMailRepository') private readonly mailRepository: IMailRepository,
  ) {}

  getEmail(to: string, subject: string, text: string): IEmail {
    return {
      to: to,
      subject: subject,
      text: text,
    };
  }

  sendEmail(mail: IEmail) {
    return this.mailRepository.sendMail(mail);
  }
}
