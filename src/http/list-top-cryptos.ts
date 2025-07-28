import { api } from './api'

export type ListCoinItem = {
  id: string
  name: string
  symbol: string
  image: string
  current_price: number
  price_change_percentage_24h: number
  market_cap: number
  total_volume: number
  market_cap_rank: number
}

type ListTopCoinsResponse = ListCoinItem[]

export async function listTopCoins() {
  const result = await api
    .get('coins/markets', {
      searchParams: {
        vs_currency: 'usd',
        order: 'market_cap_desc',
        per_page: 20,
        page: 1,
        sparkline: false,
      },
    })
    .json<ListTopCoinsResponse>()

  return result
}
