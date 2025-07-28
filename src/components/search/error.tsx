import { AlertCircleIcon } from 'lucide-react'
import { Alert, AlertDescription, AlertTitle } from '../ui/alert'

export function SearchError() {
  return (
    <Alert
      className="absolute top-full z-50 mt-1 w-full shadow-2xl"
      variant="destructive"
    >
      <AlertCircleIcon />
      <AlertTitle>The search could not be performed.</AlertTitle>
      <AlertDescription>
        <p>Please try again later.</p>
      </AlertDescription>
    </Alert>
  )
}
