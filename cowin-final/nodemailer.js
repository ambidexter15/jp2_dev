
const nodemailer = require("nodemailer");
const { getMaxListeners } = require("process");

// async..await is not allowed in global scope, must use a wrapper
async function main() {
  // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing
   // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: "akanksha.gupta@pepcoding.com", // generated ethereal user
      pass: "vkueffoxmxzfbjpj", // generated ethereal password
    },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"Akanksha Gupta 👻" <noreply@example.com>', // sender address
    to: "gupta.akanksha15@gmail.com", // list of receivers
    subject: "Fight Against Covid", // Subject line
    html: "<b>Schedule of Vacinnation</b>", // plain text body
    attachments: [{path:"./ScheduleOfVaccine.xlsx"}], // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}

main().catch(console.error); 


