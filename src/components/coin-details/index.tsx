import { notFound } from 'next/navigation'
import { getCoinDetails } from '@/http/get-coin-details'
import { CoinChart } from './chart'
import { CoinDetailsHeader } from './header'

interface CoinDetailsProps {
  coinId: string
}

export async function CoinDetails({ coinId }: CoinDetailsProps) {
  const coin = await getCoinDetails(coinId)

  if (!coin) {
    return notFound()
  }

  return (
    <div className="space-y-6">
      <CoinDetailsHeader coin={coin} />
      <CoinChart coinId={coin.id} />
    </div>
  )
}
