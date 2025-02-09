import { Body, Controller, Post } from '@nestjs/common';
// import { ISendMail } from 'src/usecase/mail.usecase';
import { mailDto } from '../dto/mail.dto';
import { SendMail } from 'src/usecase/mail.usecase';

@Controller('api/v1/mail')
export class MailController {
  //   constructor(@Inject('ISendMail') private readonly sendMail: ISendMail) {}
  constructor(private readonly sendMail: SendMail) {}

  //   メール送信
  @Post()
  SendMail(@Body() body: mailDto) {
    return this.sendMail.sendMail(body);
  }
}
