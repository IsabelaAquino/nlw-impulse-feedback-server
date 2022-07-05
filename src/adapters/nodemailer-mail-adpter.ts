import { MailAdapter, SendMailData } from './mail-adapter';
import nodemailer from 'nodemailer'

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "f974c39546e391",
        pass: "809195ff110877"
    }
});

export class NodemailerMailAdapter implements MailAdapter{
   
   async sendMail({subject, body}: SendMailData){
    
    await transport.sendMail({
        from: 'Equipe Feedget <oi@feedget.com>',
        to: 'Isabela Aquino <isabela.isavzp@gmail.com>',
        subject: subject,
        html: body,
    }) 
   }
}