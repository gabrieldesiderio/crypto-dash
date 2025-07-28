'use client'

import { useQuery } from '@tanstack/react-query'
import { notFound } from 'next/navigation'
import { getCoinDetails } from '@/http/get-coin-details'
import { CoinChart } from './chart'
import { CoinDetailsError } from './error'
import { CoinDetailsHeader } from './header'
import { CoinDetailsSketeton } from './skeleton'

interface CoinDetailsProps {
  coinId: string
}

export function CoinDetails({ coinId }: CoinDetailsProps) {
  const {
    data: coin,
    isLoading,
    isError,
  } = useQuery({
    queryKey: [coinId, 'coinDetails'],
    queryFn: () => getCoinDetails(coinId),
    enabled: !!coinId,
  })

  if (isLoading) {
    return <CoinDetailsSketeton />
  }

  if (isError) {
    return <CoinDetailsError />
  }

  if (!coin) {
    return notFound()
  }

  return (
    <div className="space-y-6">
      <CoinDetailsHeader coin={coin} />
      <CoinChart coinId={coinId} />
    </div>
  )
}
