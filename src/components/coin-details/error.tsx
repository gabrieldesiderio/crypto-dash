import { AlertCircle, RefreshCw } from 'lucide-react'
import { Alert, AlertDescription } from '../ui/alert'
import { Button } from '../ui/button'

export function CoinDetailsError() {
  return (
    <Alert variant="destructive">
      <AlertCircle className="h-4 w-4" />
      <AlertDescription className="flex items-center justify-between">
        <Button className="ml-2 bg-transparent" size="sm" variant="outline">
          <RefreshCw className="mr-1 h-3 w-3" />
          Try again
        </Button>
      </AlertDescription>
    </Alert>
  )
}
