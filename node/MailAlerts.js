var nodemailer  = require('nodemailer');
var config = require('./config');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: config.emailer.maileremail,
    pass: config.emailer.mailerpassword
  }
});

function sendMail(email, subject, text){
  transporter.sendMail({
    from: config.maileremail,
    to: email,
    subject: subject,
    text: text
  }, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
}
