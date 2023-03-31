const nodemailer = require('nodemailer');
const { config } = require('../config/config');
const UserService = require('./../services/userService');
const service = new UserService();

const sendEmail = async (req, res) => {
  try {
    const { email } = req.body;

    const user = await service.findByEmail(email);

    if (!user) {
      res.status(404);
      res.send({ error: 'Unauthorized' });
    } else {
      // create reusable transporter object using the default SMTP transport
      let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
          user: config.user_email,
          pass: config.pass_email,
        },
      });

      // send mail with defined transport object
      await transporter.sendMail({
        from: config.user_email, // sender address
        to: `${user.email}`, // list of receivers
        subject: 'Hello ✔', // Subject line
        text: 'Hello world?', // plain text body
        html: '<b>Hello world Yoniher?</b>', // html body
      });

      res.status(200);
      res.send({ OK: 'Correo enviado' });
    }
  } catch (error) {}
};

module.exports = { sendEmail };
