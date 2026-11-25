import Footer from "@/components/features/footer/footer";
import NavigationBar from "@/components/features/navigation/components/bar.navigation";
import NavigationProvider from "@/components/features/navigation/providers/index.provider";
import { NavbarProvider } from "@/components/ui/nav-items";
import { archivoFont, geistMono, interFont } from "@/lib/fonts";
import { ORGANIZATIONSCHEMA } from "@/lib/schemas/organization-schema";
import { WEBSITESCHEMA } from "@/lib/schemas/website-schema";
import JsonLd from "@/utils/json-ld.provider";
import GoogleAnalyticsTag from "@/utils/tag-manager";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    template: "%s | Swaraj Automations",
    default: "Swaraj Automations",
  },
  description: "CNC machining and automation solutions",
  openGraph: {
    title: "Swaraj Automations",
    description: "CNC machining and automation solutions",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${archivoFont.variable} ${geistMono.variable} ${archivoFont.className} ${interFont.variable} h-full antialiased`}
    >
      <head>
        {/* Pre-connect links */}
        <PreconnectLinks />
        {/* end Pre-connect links */}
        {/* JSON - LD Schema */}
        <JSONSchema />
        {/* end JSON - LD Schema */}
      </head>
      {/* Google Analytics */}
      <GoogleAnalyticsTag />
      {/* end Google Analytics */}
      <body className="min-h-full flex flex-col">
        <NavigationProvider>
          <NavbarProvider
            initState={{
              isDark: false,
              isOpen: false,
              items: [],
              activeChild: undefined,
            }}
          >
            <NavigationBar />
            <main className={""}>{children}</main>
            <Footer />
          </NavbarProvider>
        </NavigationProvider>
      </body>
    </html>
  );
}

function JSONSchema() {
  return (
    <>
      <JsonLd data={ORGANIZATIONSCHEMA} />
      <JsonLd data={WEBSITESCHEMA} />
    </>
  );
}

function PreconnectLinks() {
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="anonymous"
      />
    </>
  );
}
