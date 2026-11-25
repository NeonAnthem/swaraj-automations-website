export const MAX_RESUME_SIZE_BYTES = 10 * 1024 * 1024;

export const RESUME_CONTENT_TYPES: Record<string, string> = {
  ".pdf": "application/pdf",
  ".doc": "application/msword",
  ".docx":
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
};

export type CareerApplicationData = {
  name: string;
  email: string;
  phone: string;
  message: string;
};
