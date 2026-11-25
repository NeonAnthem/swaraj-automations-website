import nodemailer from "nodemailer";
import type { SendMailOptions, Transporter } from "nodemailer";

type EmailMessage = {
  subject: string;
  text: string;
  replyTo?: string;
};
type EmailAttachment = NonNullable<SendMailOptions["attachments"]>[number];

function requiredEnvironmentValue(name: string) {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Missing email configuration: ${name}`);
  }
  return value;
}

export class EmailService {
  private readonly transporter: Transporter;
  private readonly sender: string;
  private readonly recipient: string;

  constructor(recipient: string | undefined) {
    const user = requiredEnvironmentValue("GMAIL_USER");
    const appPassword = requiredEnvironmentValue("GMAIL_APP_PASSWORD");
    if (!recipient) {
      throw new Error("Missing recipient email configuration.");
    }

    this.sender = user;
    this.recipient = recipient;
    this.transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user,
        pass: appPassword,
      },
    });
  }

  send(message: EmailMessage) {
    return this.transporter.sendMail({
      ...message,
      from: this.sender,
      to: this.recipient,
    });
  }

  sendWithAttachments(
    message: EmailMessage,
    attachments: EmailAttachment[],
  ) {
    return this.transporter.sendMail({
      ...message,
      from: this.sender,
      to: this.recipient,
      attachments,
    });
  }
}
