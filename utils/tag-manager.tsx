import { GoogleAnalytics } from "@next/third-parties/google";

const GTAG = process.env.GA4_MEASUREMENT_ID!;

export default function GoogleAnalyticsTag() {
  return <GoogleAnalytics gaId={GTAG} />;
}
