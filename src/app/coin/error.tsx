'use client'

import { AlertCircle, RefreshCw } from 'lucide-react'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Button } from '@/components/ui/button'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  console.error(error)

  return (
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
  )
}
