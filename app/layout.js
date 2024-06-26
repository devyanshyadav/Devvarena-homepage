import { Inter } from "next/font/google";
import "./globals.css";
// import { Analytics } from '@vercel/analytics/react';

const inter = Inter({ subsets: ["latin"] });
import { GoogleAnalytics } from '@next/third-parties/google'


export const metadata = {
  title: "Devvarena - The Perfect Frontend Editor for Beginners",
  siteName: "Devvarena",
  description: "Devvarena is a simple, powerful, and feature-packed frontend editor designed specifically for beginners. It includes CSS tools, a JavaScript editor, an HTML editor, and a CSS editor. It also provides a JavaScript console for debugging and testing your code. Start coding and exploring the world of frontend development with Devvarena.",
  keywords: [
    "codepen",
    "sandbox",
    "replit",
    "devyansh",
    "frontend editor",
    "CSS tools",
    "JavaScript editor",
    "HTML editor",
    "CSS editor",
    "JS console",
    "online editor",
    "beginner-friendly editor",
    "frontend editor for beginners",
    "best frontend editor for learning",
    "easy-to-use frontend editor",
    "beginner-friendly css tools",
    "javascript editor with console",
    "html and css editor for beginners",
    "simple frontend editor",
    "powerful frontend editor",
    "feature-packed frontend editor",
    "learn html and css online",
    "interactive frontend coding",
    "web development for beginners",
  ],
  type: "product",
  openGraph: {
    title: 'Devvarena - The Perfect Frontend Editor for Beginners',
    description: "Devvarena is a simple, powerful, and feature-packed frontend editor designed specifically for beginners. It includes CSS tools, a JavaScript editor, an HTML editor, and a CSS editor. It also provides a JavaScript console for debugging and testing your code. Start coding and exploring the world of frontend development with Devvarena.",
    url: 'https://www.devvarena.com/',
    siteName: 'Devvarena',
    images: [
      {
        url: 'https://img.icons8.com/ios/50/4433FF/d-key.png',
        width: 800,
        height: 600,
        alt: 'Devvarena Logo',
      },
      {
        url: 'https://img.icons8.com/ios/50/4433FF/d-key.png',
        width: 1800,
        height: 1600,
        alt: 'Devvarena Logo',
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="w-screen h-screen overflow-y-scroll bg-secondary max-w-6xl md:px-3">
          {children}
        {/* <Analytics />*/}
        <GoogleAnalytics gaId="G-PE4R8VNBDT" />
        </main>
      </body>
    </html>
  );
}
