import { AlertCircle, RefreshCw } from 'lucide-react'
import Link from 'next/link'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Button } from '@/components/ui/button'

interface CoinChartErrorProps {
  coinId: string
}

export function CoinChartError({ coinId }: CoinChartErrorProps) {
  return (
    <Alert variant="destructive">
      <AlertCircle className="size-4" />
      <AlertTitle>Data unavailable</AlertTitle>
      <AlertDescription className="flex items-center justify-between">
        <Link href={`/coin/${coinId}`} passHref>
          <Button className="ml-2 bg-transparent" size="sm" variant="outline">
            <RefreshCw className="mr-1 h-3 w-3" />
            Try again
          </Button>
        </Link>
      </AlertDescription>
    </Alert>
  )
}
