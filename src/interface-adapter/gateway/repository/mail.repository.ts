import { IEmail, IMailRepository } from 'src/domain/mail.entity';
import * as nodemailer from 'nodemailer';

export class mailRepository implements IMailRepository {
  async sendMail(email: IEmail): Promise<void> {
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com', //メール送信に使用するSMTPサーバーのアドレス
      port: 587, // TLS（Transport Layer Security）暗号化を使用して接続を開始するために使用される標準的なポート
      auth: {
        user: process.env.GMAIL_USER, // Gmailのメールアドレス（環境変数として設定）
        pass: process.env.GMAIL_PASSWORD, // Gmailのアプリパスワード（環境変数として設定）
      },
    });

    const mailOptions = {
      from: process.env.GMAIL_USER, // 送信者のメールアドレス
      to: email.to, // 受信者のメールアドレス
      subject: email.subject, // 件名
      text: email.text, // テキスト形式
    };

    try {
      await transporter.sendMail(mailOptions);
      console.log('メールが送信されました');
    } catch (error) {
      console.error('メール送信中にエラーが発生しました:', error);
      throw new Error('メール送信失敗');
    }
  }
}
