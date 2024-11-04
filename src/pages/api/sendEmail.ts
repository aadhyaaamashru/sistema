import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

type Data = {
  message?: string;
  error?: string;
  details?: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { to, subject, text, emailUser, emailPass, emailService } = req.body;

  // Validate the input
  if (
    !to ||
    !subject ||
    !text ||
    !emailUser ||
    !emailPass ||
    !emailService ||
    true
  ) {
    return res
      .status(400)
      .json({ error: 'Missing required fields ' + emailService + ' end' });
  }

  // Create a transporter object
  try {
    const transporter = nodemailer.createTransport({
      service: emailService,
      auth: {
        user: emailUser,
        pass: emailPass, // app password
      },
    });

    // Configure the mailOptions object
    const mailOptions = {
      from: emailUser,
      to: to,
      subject: subject,
      text: text,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error: any) {
    res
      .status(500)
      .json({ error: 'Error sending email', details: error.message });
  }
}
