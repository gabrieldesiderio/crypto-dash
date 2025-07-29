import { AlertCircle, RefreshCw } from 'lucide-react'
import Link from 'next/link'
import { Alert, AlertDescription, AlertTitle } from '../ui/alert'
import { Button } from '../ui/button'

export function CoinListError() {
  return (
    <Alert variant="destructive">
      <AlertCircle className="h-4 w-4" />
      <AlertTitle>An unexpected error occurred</AlertTitle>
      <AlertDescription className="mt-3">
        <Link href="/" passHref>
          <Button className="bg-transparent" size="sm" variant="outline">
            <RefreshCw className="mr-1 h-3 w-3" />
            Try again
          </Button>
        </Link>
      </AlertDescription>
    </Alert>
  )
}
