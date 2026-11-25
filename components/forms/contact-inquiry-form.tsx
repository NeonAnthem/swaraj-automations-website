"use client";

import { useForm } from "@tanstack/react-form";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

type ContactFormValues = {
  name: string;
  email: string;
  phone: string;
  message: string;
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
  return "We could not submit your inquiry. Please try again.";
}

function validateName(value: string) {
  return value.trim() ? undefined : "Enter your name.";
}

function validateEmail(value: string) {
  if (!value.trim()) return "Enter your email address.";
  return EMAIL_PATTERN.test(value) ? undefined : "Enter a valid email address.";
}

async function validateEmailDomain(value: string) {
  const domain = value.split("@")[1]?.toLowerCase();
  if (domain && COMMON_DOMAIN_TYPOS.has(domain)) {
    return "Check the spelling of your email domain.";
  }
}

function validatePhone(value: string) {
  const digits = value.replace(/\D/g, "");
  return digits.length >= 7 && digits.length <= 15
    ? undefined
    : "Enter a phone number with 7–15 digits.";
}

export function ContactInquiryForm() {
  const [status, setStatus] = useState<SubmissionStatus | null>(null);

  const form = useForm({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    } satisfies ContactFormValues,
    onSubmit: async ({ value }) => {
      setStatus(null);
      try {
        const response = await fetch("/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(value),
        });
        const payload: unknown = await response.json();

        if (!response.ok) {
          throw new Error(getSubmissionError(payload));
        }

        setStatus({
          type: "success",
          message: "Your inquiry was sent successfully.",
        });
      } catch (error) {
        setStatus({
          type: "error",
          message:
            error instanceof Error
              ? error.message
              : "We could not submit your inquiry. Please try again.",
        });
      }
    },
  });

  return (
    <form
      className="w-full space-y-4"
      noValidate
      onSubmit={(event) => {
        event.preventDefault();
        event.stopPropagation();
        void form.handleSubmit();
      }}
    >
      <form.Field
        name="name"
        validators={{
          onChange: ({ value }) => validateName(value),
          onSubmit: ({ value }) => validateName(value),
        }}
      >
        {(field) => {
          const errorId = "contact-name-error";
          return (
            <div className="flex flex-col gap-2">
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
            </div>
          );
        }}
      </form.Field>

      <form.Field
        name="email"
        validators={{
          onChange: ({ value }) => validateEmail(value),
          onSubmit: ({ value }) => validateEmail(value),
          onChangeAsyncDebounceMs: 500,
          onChangeAsync: ({ value }) => validateEmailDomain(value),
          onSubmitAsync: ({ value }) => validateEmailDomain(value),
        }}
      >
        {(field) => {
          const errorId = "contact-email-error";
          return (
            <div className="flex flex-col gap-2">
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
            </div>
          );
        }}
      </form.Field>

      <form.Field
        name="phone"
        validators={{
          onChange: ({ value }) => validatePhone(value),
          onSubmit: ({ value }) => validatePhone(value),
        }}
      >
        {(field) => {
          const errorId = "contact-phone-error";
          return (
            <div className="flex flex-col gap-2">
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
            </div>
          );
        }}
      </form.Field>

      <form.Field name="message">
        {(field) => (
          <div className="flex flex-col gap-2">
            <Label htmlFor={field.name}>Message</Label>
            <Textarea
              id={field.name}
              rows={4}
              value={field.state.value}
              onBlur={field.handleBlur}
              onChange={(event) => field.handleChange(event.target.value)}
            />
          </div>
        )}
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
