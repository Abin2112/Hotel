import type { Metadata, Viewport } from 'next';
import { Poppins, Playfair_Display } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';
import { LanguageProvider } from '@/lib/language-context';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { ChatbotWidget } from '@/components/chatbot-widget';
import { FloatingCallButton } from '@/components/floating-call-button';
import './globals.css';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-playfair',
});

export const metadata: Metadata = {
  title: 'Purvanchal Dhaba & Family Restaurant | Highway Flavours',
  description:
    'Experience authentic North Indian vegetarian cuisine at Purvanchal Dhaba. Pure veg dhaba-style food with modern comfort on NH-28 Highway. Open 24 hours.',
  keywords: [
    'Purvanchal Dhaba',
    'Highway Restaurant',
    'Pure Vegetarian',
    'North Indian Food',
    'Dhaba',
    'Family Restaurant',
    'NH-28',
  ],
  authors: [{ name: 'Purvanchal Dhaba' }],
  openGraph: {
    title: 'Purvanchal Dhaba & Family Restaurant',
    description: 'Highway Flavours - Authentic North Indian Vegetarian Cuisine',
    type: 'website',
  },
};

export const viewport: Viewport = {
  themeColor: '#d97706',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased">
        <LanguageProvider>
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
          <ChatbotWidget />
          <FloatingCallButton />
        </LanguageProvider>
        <Analytics />
      </body>
    </html>
  );
}
