import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Devvarena',
  description: 'The Perfect Editor for Beginners | Simple, Powerful, and Feature-Packed',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className='w-screen h-screen overflow-y-scroll bg-secondary max-w-6xl md:px-3'>
        {children}
        </main>
      </body>
    </html>
  )
}
