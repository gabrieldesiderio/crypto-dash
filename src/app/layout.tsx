import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Analytics } from '@vercel/analytics/next'
import type { ReactNode } from 'react'
import { Header } from '@/components/header'
import { Providers } from './providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'CryptoDash - Cryptocurrency Dashboard',
  description: 'Modern dashboard to track cryptocurrencies in real time',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <Providers>
          <Header />
          <main className="container mx-auto px-4 py-6">{children}</main>
          <Analytics />
        </Providers>
      </body>
    </html>
  )
}
