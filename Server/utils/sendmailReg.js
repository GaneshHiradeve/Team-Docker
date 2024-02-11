
import {createTransport} from 'nodemailer';
import path from 'path';
import hbs from 'nodemailer-express-handlebars';
import logger from './logger.js';

export const sendemailReg=async(user,subject)=>{
  logger.info(`SendEmail|  Sending email.`);

    const transporter=createTransport({
      service:'gmail',
      auth: {
        user: process.env.gmail, 
        pass: process.env.password, 
      },
    });

    const handlebarOptions = {
      viewEngine: {
          partialsDir: path.resolve('./mail/'),
          defaultLayout: false,
      },
      viewPath: path.resolve('./mail/'),
    };
    transporter.use('compile', hbs(handlebarOptions))

   let info= await transporter.sendMail({
       to:user.email,
       subject,
       from:`${process.env.gmail}`,
       template: 'email1', 
       context:{
        name: user.name, 
        company: 'Todo',
       
    },
    })
    console.log("Message sent: %s", info.messageId);

}