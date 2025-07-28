'use client'

import { useQuery } from '@tanstack/react-query'
import { listTopCoins } from '@/http/list-top-cryptos'
import { CoinListError } from './error'
import { CoinListTable } from './table'
import { CoinListTableSkeleton } from './table/skeleton'

export function CoinList() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['listTopCoins'],
    queryFn: listTopCoins,
  })

  if (isLoading) {
    return <CoinListTableSkeleton />
  }

  if (isError) {
    return <CoinListError />
  }

  return <CoinListTable coins={data || []} />
}
