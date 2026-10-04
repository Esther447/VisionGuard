import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const siteUrl = 'https://visionguard.digital';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'VisionGuard | AI-Powered Vision Security Platform',
    template: '%s | VisionGuard',
  },
  description:
    'VisionGuard provides real-time AI computer vision monitoring, threat detection, and automated security analytics.',
  keywords: [
    'VisionGuard',
    'AI Security',
    'Computer Vision',
    'Threat Detection',
    'Video Analytics',
    'Real-time Monitoring',
  ],
  authors: [{ name: 'VisionGuard Team' }],
  creator: 'VisionGuard',
  publisher: 'VisionGuard',
  verification: {
    google: 'USBFVSTnbT39AcXTcDXLk6n9O0pk7C450efEdsoyMKw',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    title: 'VisionGuard | AI-Powered Vision Security Platform',
    description:
      'VisionGuard provides real-time AI computer vision monitoring, threat detection, and automated security analytics.',
    siteName: 'VisionGuard',
    images: [
      {
        url: `${siteUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: 'VisionGuard Platform Overview',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'VisionGuard | AI-Powered Vision Security Platform',
    description:
      'VisionGuard provides real-time AI computer vision monitoring, threat detection, and automated security analytics.',
    images: [`${siteUrl}/og-image.png`],
    creator: '@VisionGuard',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col" suppressHydrationWarning>{children}</body>
    </html>
  );
}
