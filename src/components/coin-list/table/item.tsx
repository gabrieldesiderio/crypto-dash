'use client'

import { TrendingDown, TrendingUp } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { Badge } from '@/components/ui/badge'
import type { ListCoinItem } from '@/http/list-top-cryptos'
import { formatCurrency, formatMarketCap } from '@/utils/currency'

interface CoinListItemProps {
  crypto: ListCoinItem
}

export function CoinListItem({ crypto }: CoinListItemProps) {
  const isPositive = crypto.price_change_percentage_24h > 0

  return (
    <Link
      className="grid cursor-pointer grid-cols-8 gap-4 p-4 transition-colors hover:bg-muted/50 md:grid-cols-12"
      href={`/coin/${crypto.id}`}
    >
      <div className="col-span-1 flex items-center justify-center">
        <span className="font-medium text-muted-foreground text-sm">
          {crypto.market_cap_rank}
        </span>
      </div>

      <div className="col-span-3 flex items-center gap-3">
        <Image
          alt={crypto.name}
          className="size-8 rounded-full"
          height={32}
          src={crypto.image}
          width={32}
        />
        <div className="min-w-0">
          <div className="truncate font-semibold">{crypto.name}</div>
          <Badge className="text-xs" variant="secondary">
            {crypto.symbol.toUpperCase()}
          </Badge>
        </div>
      </div>

      <div className="col-span-2 flex items-center justify-end">
        <span className="font-semibold">
          {formatCurrency(crypto.current_price)}
        </span>
      </div>

      <div className="col-span-2 flex items-center justify-end">
        <div
          className={`flex items-center gap-1 ${isPositive ? 'text-green-600' : 'text-red-600'}`}
        >
          {isPositive ? (
            <TrendingUp className="h-3 w-3" />
          ) : (
            <TrendingDown className="h-3 w-3" />
          )}
          <span className="font-medium text-sm">
            {Math.abs(crypto.price_change_percentage_24h).toFixed(2)}%
          </span>
        </div>
      </div>

      <div className="col-span-2 hidden items-center justify-end md:flex">
        <span className="font-medium text-sm">
          {formatMarketCap(crypto.market_cap)}
        </span>
      </div>

      <div className="col-span-2 hidden items-center justify-end md:flex">
        <span className="font-medium text-sm">
          {formatMarketCap(crypto.total_volume)}
        </span>
      </div>
    </Link>
  )
}
