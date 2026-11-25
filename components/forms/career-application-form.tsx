"use client";

import { useForm } from "@tanstack/react-form";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Field } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  MAX_RESUME_SIZE_BYTES,
  RESUME_CONTENT_TYPES,
  type CareerApplicationData,
} from "@/utils/career-application";

type CareerFormValues = CareerApplicationData & {
  resume: File | null;
};

type SubmissionStatus = {
  type: "success" | "error";
  message: string;
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const COMMON_DOMAIN_TYPOS = new Set([
  "gmail.con",
  "gmail.cmo",
  "outlook.con",
  "yahoo.con",
]);

function ValidationMessage({
  id,
  errors,
}: {
  id: string;
  errors: readonly unknown[];
}) {
  if (errors.length === 0) return null;

  return (
    <p id={id} className="text-sm text-destructive" role="alert">
      {errors.map(String).join(" ")}
    </p>
  );
}

function getSubmissionError(payload: unknown) {
  if (
    typeof payload === "object" &&
    payload !== null &&
    "error" in payload &&
    typeof payload.error === "string"
  ) {
    return payload.error;
  }
  return "We could not submit your application. Please try again.";
}

function validateName({ value }: { value: string }) {
  return value.trim() ? undefined : "Enter your name.";
}

function validateEmail({ value }: { value: string }) {
  if (!value.trim()) return "Enter your email address.";
  return EMAIL_PATTERN.test(value) ? undefined : "Enter a valid email address.";
}

async function validateEmailDomain({ value }: { value: string }) {
  const domain = value.split("@")[1]?.toLowerCase();
  if (domain && COMMON_DOMAIN_TYPOS.has(domain)) {
    return "Check the spelling of your email domain.";
  }
}

function validatePhone({ value }: { value: string }) {
  const digits = value.replace(/\D/g, "");
  return digits.length >= 7 && digits.length <= 15
    ? undefined
    : "Enter a phone number with 7–15 digits.";
}

function validateResume({ value }: { value: File | null }) {
  if (!value) return "Attach your resume.";
  if (value.size > MAX_RESUME_SIZE_BYTES) {
    return "Your resume must be 10 MB or smaller.";
  }

  const extension = value.name.slice(value.name.lastIndexOf(".")).toLowerCase();
  return Object.hasOwn(RESUME_CONTENT_TYPES, extension)
    ? undefined
    : "Choose a PDF, DOC, or DOCX file.";
}

export function CareerApplicationForm() {
  const [status, setStatus] = useState<SubmissionStatus | null>(null);

  const defaultValues: CareerFormValues = {
    name: "",
    email: "",
    phone: "",
    message: "",
    resume: null,
  };

  const form = useForm({
    defaultValues,
    onSubmit: async ({ value }) => {
      setStatus(null);
      if (!value.resume) {
        setStatus({ type: "error", message: "Attach your resume." });
        return;
      }

      const body = new FormData();
      body.set("name", value.name);
      body.set("email", value.email);
      body.set("phone", value.phone);
      body.set("message", value.message);
      body.set("resume", value.resume, value.resume.name);

      try {
        const response = await fetch("/api/careers", {
          method: "POST",
          body,
        });
        const payload: unknown = await response.json();

        if (!response.ok) {
          throw new Error(getSubmissionError(payload));
        }

        setStatus({
          type: "success",
          message: "Your application was sent successfully.",
        });
      } catch (error) {
        setStatus({
          type: "error",
          message:
            error instanceof Error
              ? error.message
              : "We could not submit your application. Please try again.",
        });
      }
    },
  });

  return (
    <form
      className="w-full space-y-4 pt-12"
      noValidate
      onSubmit={(event) => {
        event.preventDefault();
        event.stopPropagation();
        void form.handleSubmit();
      }}
    >
      <form.Field
        name="name"
        validators={{ onChange: validateName, onSubmit: validateName }}
      >
        {(field) => {
          const errorId = "career-name-error";
          return (
            <Field>
              <Label htmlFor={field.name}>Name</Label>
              <Input
                id={field.name}
                autoComplete="name"
                value={field.state.value}
                onBlur={field.handleBlur}
                onChange={(event) => field.handleChange(event.target.value)}
                aria-invalid={field.state.meta.errors.length > 0}
                aria-describedby={errorId}
                required
              />
              <ValidationMessage
                id={errorId}
                errors={field.state.meta.errors}
              />
            </Field>
          );
        }}
      </form.Field>

      <form.Field
        name="email"
        validators={{
          onChange: validateEmail,
          onSubmit: validateEmail,
          onChangeAsyncDebounceMs: 500,
          onChangeAsync: validateEmailDomain,
          onSubmitAsync: validateEmailDomain,
        }}
      >
        {(field) => {
          const errorId = "career-email-error";
          return (
            <Field>
              <Label htmlFor={field.name}>Email</Label>
              <Input
                id={field.name}
                type="email"
                autoComplete="email"
                value={field.state.value}
                onBlur={field.handleBlur}
                onChange={(event) => field.handleChange(event.target.value)}
                aria-invalid={field.state.meta.errors.length > 0}
                aria-describedby={errorId}
                required
              />
              {field.state.meta.isValidating && (
                <p className="text-muted-foreground text-xs" role="status">
                  Checking the email domain…
                </p>
              )}
              <ValidationMessage
                id={errorId}
                errors={field.state.meta.errors}
              />
            </Field>
          );
        }}
      </form.Field>

      <form.Field
        name="phone"
        validators={{ onChange: validatePhone, onSubmit: validatePhone }}
      >
        {(field) => {
          const errorId = "career-phone-error";
          return (
            <Field>
              <Label htmlFor={field.name}>Phone</Label>
              <Input
                id={field.name}
                type="tel"
                autoComplete="tel"
                value={field.state.value}
                onBlur={field.handleBlur}
                onChange={(event) => field.handleChange(event.target.value)}
                aria-invalid={field.state.meta.errors.length > 0}
                aria-describedby={errorId}
                required
              />
              <ValidationMessage
                id={errorId}
                errors={field.state.meta.errors}
              />
            </Field>
          );
        }}
      </form.Field>

      <form.Field name="message">
        {(field) => (
          <Field>
            <Label htmlFor={field.name}>Message</Label>
            <Textarea
              id={field.name}
              rows={4}
              value={field.state.value}
              onBlur={field.handleBlur}
              onChange={(event) => field.handleChange(event.target.value)}
            />
          </Field>
        )}
      </form.Field>

      <form.Field
        name="resume"
        validators={{
          onChange: validateResume,
          onSubmit: validateResume,
        }}
      >
        {(field) => {
          const errorId = "career-resume-error";
          const hintId = "career-resume-hint";
          return (
            <Field>
              <Label htmlFor={field.name}>Resume</Label>
              <Input
                id={field.name}
                type="file"
                accept=".pdf,.doc,.docx"
                onBlur={field.handleBlur}
                onChange={(event) =>
                  field.handleChange(event.currentTarget.files?.[0] ?? null)
                }
                aria-invalid={field.state.meta.errors.length > 0}
                aria-describedby={`${hintId} ${errorId}`}
                required
              />
              <p id={hintId} className="text-muted-foreground text-xs">
                PDF, DOC, or DOCX; up to 10 MB.
              </p>
              <ValidationMessage
                id={errorId}
                errors={field.state.meta.errors}
              />
            </Field>
          );
        }}
      </form.Field>

      <form.Subscribe selector={(state) => state.isSubmitting}>
        {(isSubmitting) => (
          <Button className="w-full" type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Submitting…" : "Submit"}
          </Button>
        )}
      </form.Subscribe>

      {status && (
        <p
          className={
            status.type === "error" ? "text-sm text-destructive" : "text-sm"
          }
          role={status.type === "error" ? "alert" : "status"}
        >
          {status.message}
        </p>
      )}
    </form>
  );
}
