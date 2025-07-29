import { Coins, Home } from 'lucide-react'
import Link from 'next/link'
import { SearchBar } from '@/components/search'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function NotFound() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex min-h-[60vh] items-center justify-center">
        <Card className="w-full max-w-lg text-center">
          <CardHeader className="pb-6">
            <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-muted">
              <Coins className="h-12 w-12 text-muted-foreground" />
            </div>
            <CardTitle className="mb-2 font-bold text-3xl">
              404 - Page Not Found
            </CardTitle>
            <p className="text-base text-muted-foreground">
              The page you're looking for doesn't exist. Try searching for a
              specific cryptocurrency below.
            </p>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-3">
              <h3 className="font-medium text-muted-foreground text-sm">
                Search for cryptocurrencies:
              </h3>
              <div className="flex justify-center">
                <div className="w-full max-w-sm">
                  <SearchBar />
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">
                  or
                </span>
              </div>
            </div>

            <div className="space-y-2">
              <Button asChild className="w-full" size="lg">
                <Link className="flex items-center gap-2" href="/">
                  <Home className="h-4 w-4" />
                  Back to Dashboard
                </Link>
              </Button>
            </div>

            <div className="border-t pt-4">
              <p className="text-muted-foreground text-xs">
                Browse the top 20 cryptocurrencies or use the search above to
                find specific coins.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
