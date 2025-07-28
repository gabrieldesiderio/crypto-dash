import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { CoinDetails } from '@/components/coin-details'
import { SearchBar } from '@/components/search'
import { Button } from '@/components/ui/button'

interface CoinPageProps {
  params: Promise<{
    id: string
  }>
}

export default async function CoinPage({ params }: CoinPageProps) {
  const { id } = await params

  return (
    <div className="space-y-6">
      <div className="flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
        <Button asChild size="sm" variant="ghost">
          <Link className="flex items-center gap-2" href="/">
            <ArrowLeft className="h-4 w-4" />
            Back to list
          </Link>
        </Button>
        <SearchBar />
      </div>
      <CoinDetails coinId={id} />
    </div>
  )
}
