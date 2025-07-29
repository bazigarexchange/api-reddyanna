import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from 'next/script'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Join India’s Favorite Gaming Community",
  description: "Join a vibrant platform for daily sports-based gaming fun.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >

      {/* Google Ads Global Site Tag (gtag.js) */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=AW-17394843260"
        strategy="afterInteractive"
      />
      <Script id="google-ads-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-17394843260');
          
          // Conversion event fires on page load
          gtag('event', 'conversion', {
              'send_to': 'AW-17394843260/sliXCIfFlvsaEPz8wOZA',
              'value': 1.0,
              'currency': 'USD'
          });
        `}
      </Script>

        {children}
      </body>
    </html>
  );
}
