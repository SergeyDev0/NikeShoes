const nodemailer = require('nodemailer')

let testEmailAccount = await nodemailer.createTestAccount()

let transporter = nodemailer.createTransport({
service: 'gmail',
  auth: {
    user: "makarkapar@gmail.com",
    pass: "babalyba06",
  },
})

let result = await transporter.sendMail({
  from: '"Магазин" <makarkapar@gmail.com>',
  to: 'usikovsergey06@gmail.com',
  subject: 'Message from Node js',
  text: 'This message was sent from Node js server.',
  html:
    'This <i>message</i> was sent from <strong>Node js</strong> server.',
})

transporter.sendMail()

console.log(result)