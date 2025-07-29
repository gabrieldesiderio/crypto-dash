'use client'

import { AlertCircle, RefreshCw } from 'lucide-react'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Button } from '@/components/ui/button'
import './globals.css'
import { Analytics } from '@vercel/analytics/next'
import { Header } from '@/components/header'
import { Providers } from './providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'CryptoDash - Cryptocurrency Dashboard',
  description: 'Modern dashboard to track cryptocurrencies in real time',
}

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  console.error(error)

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <Providers>
          <Header />
          <main className="container mx-auto px-4 py-6">
            <Alert variant="destructive">
              <AlertCircle className="size-4" />
              <AlertTitle>An unexpected error occurred</AlertTitle>
              <AlertDescription className="mt-3">
                <Button
                  className="bg-transparent"
                  onClick={() => reset()}
                  size="sm"
                  variant="outline"
                >
                  <RefreshCw className="mr-1 h-3 w-3" />
                  Try again
                </Button>
              </AlertDescription>
            </Alert>
          </main>
          <Analytics />
        </Providers>
      </body>
    </html>
  )
}
