import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'


const inter = Inter({ subsets: ['latin'],weight: ['400', '500', '600', '700', '800', '900', '300', '200'] })

export const metadata: Metadata = {
  title: 'Checkout page',
  description: 'done with next.js by Youssef Wardi',
}

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Header/>
        {children}
      </body>
    </html>
  )
}
