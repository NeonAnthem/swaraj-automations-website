# Swaraj Automation Marketing Website

This is a Marketing website for swaraj automation

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Career application email

Contact inquiries and career applications are sent through Gmail from the server. Career applications include the uploaded resume as an attachment. Copy `.env.example` to `.env.local` and set:

- `GMAIL_USER` to the Gmail account that sends application emails.
- `GMAIL_APP_PASSWORD` to an app password created for that account (Google 2-Step Verification must be enabled).
- `CAREERS_EMAIL_TO` to the inbox that should receive applications.
- `CONTACT_EMAIL_TO` to the sales inbox that should receive inquiries.

Use a Google App Password, not your Gmail account password. Keep `.env.local` private and restart the dev server after configuring it. Resumes are limited to PDF, DOC, or DOCX files up to 10 MB.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
