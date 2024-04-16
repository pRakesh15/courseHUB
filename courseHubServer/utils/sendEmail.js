import { createTransport } from "nodemailer";

export const sendEmail = async (to, subject, text) => {

  const transporter = createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: 'maxie.boyle@ethereal.email',
        pass: 'wq7urNaFr6R3dskpy7'
    }
});
  // transporter.verify((error, success) => {
  //   if (error) {
  //     console.log(error);
  //   } else {
  //     console.log("Server is ready to take our messages");
  //   }
  // });

  await transporter.sendMail({
    to,
    subject,
    text,
    from: "ciourseHUB@server.com",
  });
};
