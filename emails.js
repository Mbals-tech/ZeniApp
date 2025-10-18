import sgMail from '@sendgrid/mail';
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
export default async function sendEmail({ to, from = process.env.SENDGRID_FROM, subject, text, html }){
  await sgMail.send({ to, from, subject, text, html });
}