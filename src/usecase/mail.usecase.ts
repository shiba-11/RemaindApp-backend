import { BadRequestException, Injectable } from '@nestjs/common';
import { IEmail, MailEntity } from 'src/domain/mail.entity';
import { mailDto } from 'src/interface-adapter/dto/mail.dto';

// export interface ISendMail {
//   sendMail(body: mailDto);
// }

@Injectable()
export class SendMail {
  constructor(private readonly mailEntity: MailEntity) {}

  async sendMail(body: mailDto): Promise<IEmail> {
    const { to, subject, text } = body;
    if (!to || !subject || !text) {
      throw new BadRequestException('userId and userName are required');
    }
    const mail = this.mailEntity.getEmail(to, subject, text);
    return await this.mailEntity.sendEmail(mail);
  }
}
