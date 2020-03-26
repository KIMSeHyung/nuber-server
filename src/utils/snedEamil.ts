import Mailgun from "mailgun-js";

const mailGunClient = new Mailgun({
  apiKey: process.env.MAILGUN_KEY!,
  domain: process.env.MAILGUN_DOMAIN!
});

const sendEmail = (subject: string, html: string) => {
  const emailData: Mailgun.messages.SendData = {
    from: "tpgud33@gmail.com",
    to: "tpgud33@gmail.com",
    subject,
    html
  };
  return mailGunClient.messages().send(emailData);
};

export const sendVarificationEmail = (fullname:string,key: string) =>{
    const emailSubject = `Hello! ${fullname}, please verify your email`;
    const emailBody = `Verify your email by clicking <a href="https://naver.com">Click</a>`;
    return sendEmail(emailSubject, emailBody);
}