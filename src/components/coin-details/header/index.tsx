import { TrendingDown, TrendingUp } from 'lucide-react'
import Image from 'next/image'
import { Badge } from '@/components/ui/badge'
import type { CoinDetails } from '@/http/get-coin-details'
import { formatCurrency, formatMarketCap } from '@/utils/currency'
import { CoinDetailsHeaderCard } from './card'

interface CoinDetailsHeaderProps {
  coin: CoinDetails
}

export function CoinDetailsHeader({ coin }: CoinDetailsHeaderProps) {
  const isPositive = coin.market_data.price_change_percentage_24h > 0

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Image
          alt={coin.name}
          className="size-16 rounded-full"
          height={64}
          src={coin.image.large}
          width={64}
        />
        <div>
          <div className="flex items-center gap-2">
            <h1 className="font-bold text-3xl">{coin.name}</h1>
            <Badge variant="secondary">{coin.symbol.toUpperCase()}</Badge>
            <Badge variant="outline">#{coin.market_cap_rank}</Badge>
          </div>
          <div className="mt-1 flex items-center gap-2">
            <span className="font-bold text-2xl">
              {formatCurrency(coin.market_data.current_price.usd)}
            </span>
            <div
              className="flex items-center gap-1 text-red-600 data-[positive=true]:text-green-600"
              data-positive={isPositive}
            >
              {isPositive ? (
                <TrendingUp className="size-4" />
              ) : (
                <TrendingDown className="size-4" />
              )}
              {Math.abs(coin.market_data.price_change_percentage_24h).toFixed(
                2
              )}
              %
            </div>
          </div>
        </div>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <CoinDetailsHeaderCard
          content={formatMarketCap(coin.market_data.market_cap.usd)}
          title="Market Capitalization"
        />

        <CoinDetailsHeaderCard
          content={formatMarketCap(coin.market_data.total_volume.usd)}
          title="Volume 24h"
        />

        <CoinDetailsHeaderCard
          content={formatCurrency(coin.market_data.high_24h.usd)}
          title="24h High"
        />

        <CoinDetailsHeaderCard
          content={formatCurrency(coin.market_data.low_24h.usd)}
          title="24h Low"
        />
      </div>
    </div>
  )
}
