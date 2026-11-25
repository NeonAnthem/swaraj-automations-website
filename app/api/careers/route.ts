import { EmailService } from "@/utils/email-service";
import {
  MAX_RESUME_SIZE_BYTES,
  RESUME_CONTENT_TYPES,
  type CareerApplicationData,
} from "@/utils/career-application";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_REQUEST_SIZE_BYTES = MAX_RESUME_SIZE_BYTES + 64 * 1024;
const PDF_SIGNATURE = Buffer.from("%PDF-");
const DOC_SIGNATURE = Buffer.from("d0cf11e0a1b11ae1", "hex");
const DOCX_SIGNATURE = Buffer.from("504b0304", "hex");

function getTextField(formData: FormData, name: string) {
  const value = formData.get(name);
  return typeof value === "string" ? value.trim() : "";
}

function hasExpectedSignature(content: Buffer, extension: string) {
  if (extension === ".pdf") {
    return content.subarray(0, PDF_SIGNATURE.length).equals(PDF_SIGNATURE);
  }
  if (extension === ".doc") {
    return content.subarray(0, DOC_SIGNATURE.length).equals(DOC_SIGNATURE);
  }
  return content.subarray(0, DOCX_SIGNATURE.length).equals(DOCX_SIGNATURE);
}

function errorResponse(error: string, status: number) {
  return Response.json({ error }, { status });
}

export async function POST(request: Request) {
  const contentLength = Number(request.headers.get("content-length"));
  if (
    Number.isFinite(contentLength) &&
    contentLength > MAX_REQUEST_SIZE_BYTES
  ) {
    return errorResponse("The resume must be 10 MB or smaller.", 413);
  }

  let formData: FormData;
  try {
    formData = await request.formData();
  } catch {
    return errorResponse("Submit the application using the provided form.", 400);
  }

  const application: CareerApplicationData = {
    name: getTextField(formData, "name"),
    email: getTextField(formData, "email"),
    phone: getTextField(formData, "phone"),
    message: getTextField(formData, "message"),
  };
  const digits = application.phone.replace(/\D/g, "");

  if (
    !application.name ||
    application.name.length > 200 ||
    !EMAIL_PATTERN.test(application.email) ||
    application.email.length > 254 ||
    digits.length < 7 ||
    digits.length > 15 ||
    application.message.length > 5000
  ) {
    return errorResponse("Check the application details and try again.", 400);
  }

  const resume = formData.get("resume");
  if (!(resume instanceof File) || resume.size === 0) {
    return errorResponse("Attach your resume to submit the application.", 400);
  }
  if (resume.size > MAX_RESUME_SIZE_BYTES) {
    return errorResponse("The resume must be 10 MB or smaller.", 413);
  }

  const extension = resume.name.slice(resume.name.lastIndexOf(".")).toLowerCase();
  const contentType = RESUME_CONTENT_TYPES[extension];
  if (!contentType) {
    return errorResponse("Resume must be a PDF, DOC, or DOCX file.", 400);
  }

  const content = Buffer.from(await resume.arrayBuffer());
  if (!hasExpectedSignature(content, extension)) {
    return errorResponse("The resume file does not match its file type.", 400);
  }

  const filename =
    resume.name.split(/[\\/]/).pop()?.replace(/[\r\n"]/g, "_").slice(0, 255) ||
    "resume";

  try {
    const emailService = new EmailService(process.env.CAREERS_EMAIL_TO);
    await emailService.sendWithAttachments(
      {
        subject: `Career application from ${application.name.replace(/[\r\n]/g, " ")}`,
        replyTo: application.email,
        text: [
          `Name: ${application.name}`,
          `Email: ${application.email}`,
          `Phone: ${application.phone}`,
          "",
          "Message:",
          application.message,
        ].join("\n"),
      },
      [
        {
          filename,
          content,
          contentType,
        },
      ],
    );
  } catch (error) {
    console.error("Career application email delivery failed", error);
    return errorResponse(
      "We could not send your application right now. Please try again later.",
      500,
    );
  }

  return Response.json({ message: "Your application was sent successfully." });
}
