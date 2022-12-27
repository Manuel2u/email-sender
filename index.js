const nodemailer = require("nodemailer");

async function main() {
  let transporter = nodemailer.createTransport({
    //use gmail smtp
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: "youremail@gmail.com",
      pass: "youremailappspassword",
    },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: 'Name of Sender " <youremail@gmail.com>"', // sender address
    to: "receipient@gmail.com", // list of receivers
    subject: "Subject of mail", // Subject line
    text: "Hello world?", // plain text body
    html: `
    <html>
      <head>
        <title>Hello World</title>
      </head>
      <div style="max-width: 600px; margin: 0 auto; padding: 30px; border: 1px solid #eee; box-shadow: 0 0 10px rgba(0,0,0,0.1);">
      <img src="https://bit.ly/3FWNbR9" alt="Animated GIF" style="display: block; margin: 0 auto; width: 100%; height: 100px;">
      <h1 style="margin-top: 30px; font-size: 24px; font-weight: normal;">Hello World/h1>
      <p style="font-size: 16px; line-height: 1.5;">Dear World,</p>
    </div>
      </body>
    </html>
  `, // html body
  });

  console.log("Message sent: %s", info.messageId);
}

main().catch(console.error);
