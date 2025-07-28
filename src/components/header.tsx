import { Coins } from 'lucide-react'
import Link from 'next/link'
import { ThemeToggle } from './theme-toggle'

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link
          className="flex items-center gap-2 transition-opacity hover:opacity-80"
          href="/"
        >
          <div className="flex size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <Coins className="size-4" />
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-lg">CryptoDash</span>
            <span className="hidden text-muted-foreground text-xs sm:block">
              Cryptocurrency Dashboard
            </span>
          </div>
        </Link>

        <ThemeToggle />
      </div>
    </header>
  )
}
