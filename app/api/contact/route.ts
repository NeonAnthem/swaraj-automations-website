import { EmailService } from "@/utils/email-service";
import type { ContactInquiryData } from "@/utils/contact-inquiry";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function isContactInquiry(value: unknown): value is ContactInquiryData {
  if (typeof value !== "object" || value === null) return false;
  if (!("name" in value) || typeof value.name !== "string") return false;
  if (!("email" in value) || typeof value.email !== "string") return false;
  if (!("phone" in value) || typeof value.phone !== "string") return false;
  if (!("message" in value) || typeof value.message !== "string") return false;

  const digits = value.phone.replace(/\D/g, "");
  return (
    value.name.trim().length > 0 &&
    value.name.length <= 200 &&
    EMAIL_PATTERN.test(value.email) &&
    value.email.length <= 254 &&
    digits.length >= 7 &&
    digits.length <= 15 &&
    value.message.length <= 5000
  );
}

function errorResponse(error: string, status: number) {
  return Response.json({ error }, { status });
}

export async function POST(request: Request) {
  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    return errorResponse("Submit the inquiry using the provided form.", 400);
  }

  if (!isContactInquiry(payload)) {
    return errorResponse("Check the inquiry details and try again.", 400);
  }

  try {
    const emailService = new EmailService(process.env.CONTACT_EMAIL_TO);
    await emailService.send({
      subject: `Sales inquiry from ${payload.name.replace(/[\r\n]/g, " ")}`,
      replyTo: payload.email,
      text: [
        `Name: ${payload.name}`,
        `Email: ${payload.email}`,
        `Phone: ${payload.phone}`,
        "",
        "Message:",
        payload.message,
      ].join("\n"),
    });
  } catch (error) {
    console.error("Contact inquiry email delivery failed", error);
    return errorResponse(
      "We could not send your inquiry right now. Please try again later.",
      500,
    );
  }

  return Response.json({ message: "Your inquiry was sent successfully." });
}
