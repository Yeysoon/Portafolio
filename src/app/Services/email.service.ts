import { Injectable } from '@angular/core';
import * as nodemailer from 'nodemailer';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor() { }

  enviarCorreo(destinatario: string, asunto: string, contenido: string) {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'yeysonaldair13@gmail.com', // Tu dirección de correo electrónico de Gmail
        pass: 'cbiy wgnt mhps fvdm' // Tu contraseña de Gmail o contraseña de aplicación generada
      }
    });

    const mailOptions = {
      from: 'yeysonaldair13@gmail.com',
      to: destinatario,
      subject: asunto,
      html: contenido
    };

    transporter.sendMail(mailOptions, (error: any, info: { response: any; }) => {
      if (error) {
        console.error('Error al enviar el correo:', error);
      } else {
        console.log('Correo enviado:', info.response);
      }
    });
  }
}

